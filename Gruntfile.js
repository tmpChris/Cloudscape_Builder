module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {   
			dist: {
				src: [
					'dev/top.html', 
					'dev/_temp/style.css',
					'dev/bottom.html'
				],
				dest: 'dev/_temp/master.html',
			}
		},
		less: {
			development: {
				files: {
					'dev/_temp/style.css': 'less/style.less'
				}
			}
		},
		inlinecss: {
			main: {
				options: {
					'applyStyleTags': 'false',
					'removeStyleTags': 'false',
					'preserveMediaQueries': 'true'
				},
				files: {
					'inline.html': 'dev/_temp/master.html'
				}
			}
		}
	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-inline-css');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['less', 'concat:dist', 'inlinecss']);
};