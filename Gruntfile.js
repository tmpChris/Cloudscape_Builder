module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {   
			dist: {
				src: [
					'dev/top.html', 
					'dev/style.css',
					'dev/bottom.html'
				],
				dest: 'dev/master.html',
			}
		},
		less: {
			development: {
				files: {
					'dev/style.css': 'less/style.less'
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
					'dev/inline.html': 'dev/master.html'
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