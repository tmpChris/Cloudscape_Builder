module.exports = function(grunt) {

	// 1. An Object full of strings, so you can just edit them here. 
	var d = new Date();
	var obj = {
		// Template
		cdnLocation: 	'ajax.googleapis.com/ajax/libs/jquery',
		trCoStart: 		'?utm_source=bm23&utm_medium=email&utm_content=',
		trCoEnd: 		'&utm_campaign=!date-code-!slug&a=!date-code-!slug',
		domainName: 	'example.com',
		copyright: 		'this brand™ is a trademark of Some Legal Entity. © ' + d.getFullYear() + ' Some Legal Entity. All rights reserved.',

		// Primary content
		dateCode: 		'70-0101',
		slug: 			'bikes',
		landingPage: 	'/bikes',

		// Single Incidence Content
		expirationDate: 			'January 1, 1970 at 12:00 AM UTC',
		exclusions: 				'Excludes sale items, previous purchases and drop ship items',
		tweet: encodeURIComponent('#awesome deals for #NationalBikeMonth @TwitterDev http://!domain!landing-page'),
		
		urls: {
			featureOne: 		'/this-product-page',
			featureTwo: 		'/that-product-page',
			featureThr: 		'/what-product-page',
			featureFou: 		'/ohmy-product-page'
		},

		altText: {
			mainPromo: 				'Shop Today\'s best deal!',
			feature1L: 				'Check out this great bicycle!',
			feature1R: 				'Be sure not to miss this!',
			featureOne: 			'Shop for this bicycle now!',
			featureTwo: 			'Check out some Bike parts now!',
			featureThr: 			'Look at our sale bikes now!',
			featureFou: 			'Look at our sale bikes now!'
		}
	};

	// 2. Config
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
					'applyStyleTags': true,
					'removeStyleTags': false,
					'preserveMediaQueries': true
				},
				files: {
					'dev/_temp/inline.html': 'dev/_temp/master.html'
				}
			}
		},
		watch: {
			scripts: {
				files: ['dev/*.html', 'less/style.less'],
				tasks: ['default']
			}
		},
		replace: {
			runtext: {
				src: ['dev/_temp/inline.html'],
				dest: 'inline.html',
				replacements: [{
					from: '!cdn-location',
					to: obj.cdnLocation 
				}, {
					from: '!tc-st',
					to: obj.trCoStart
				}, {
					from: '!tc-en',
					to: obj.trCoEnd
				}, {
					from: '!tweet',
					to: obj.tweet
				}, {
					from: '!date-code',
					to: obj.dateCode
				}, {
					from: '!slug',
					to: obj.slug
				}, {
					from: '!domain',
					to: obj.domainName
				}, {
					from: '!exclusions',
					to: obj.exclusions
				}, {
					from: '!copyright',
					to: obj.copyright
				}, {
					from: '!landing-page',
					to: obj.landingPage
				}, {
					from: '!expiration-date',
					to: obj.expirationDate
				}, {
					from: '<link rel="stylesheet" href="style.css">',
					to: ' '
				}, {
					from: '!alt-main-promo',
					to: obj.altText.mainPromo
				}, {
					from: '!alt-feature-1-L',
					to: obj.altText.feature1L
				}, {
					from: '!alt-feature-1-R',
					to: obj.altText.feature1R
				}, {
					from: '!alt-feature-1',
					to: obj.altText.featureOne
				}, {
					from: '!alt-feature-2',
					to: obj.altText.featureTwo
				}, {
					from: '!alt-feature-3',
					to: obj.altText.featureThr
				}, {
					from: '!alt-feature-4',
					to: obj.altText.featureFou
				}, {
					from: '!url-feature-one',
					to: obj.urls.featureOne
				}, {
					from: '!url-feature-two',
					to: obj.urls.featureTwo
				}, {
					from: '!url-feature-thr',
					to: obj.urls.featureThr
				}, {
					from: '!url-feature-fou',
					to: obj.urls.featureFou
				}]
			}
		}
	});

	// 3. Plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-inline-css');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-text-replace');

	// 4. Tasks
	grunt.registerTask('default', ['less', 'concat:dist', 'inlinecss', 'replace']);
};


























