module.exports = function(grunt) {

	// 1. An Object full of strings, so you can just edit them here. 
	var d = new Date();
	var obj = {
		// Template
		cdnLocation: 	'string_partial',
		trCoStart: 		'?utm_source=bm23&utm_medium=email&utm_content=',
		trCoEnd: 		'&utm_campaign=!date-code-!slug&a=!date-code-!slug',
		domainName: 	'example.com',
		copyright: 		'© ' + d.getFullYear() + ' Some Legal Entity. Disclaimer.',

		// Which html file(s)?
		fileBottom: 	'dev/main-plus-six.html',

		// Primary content
		dateCode: 		'70-0101',
		slug: 			'string',
		landingPage: 	'/string', //main banner link & social share link

		// Single Incidence Content
		expirationDate: 			'January 1, 1970 at 12:00 AM UTC',
		exclusions: 				'string',
		tweet:   encodeURIComponent('#MyTweet @TwitterDev http://!domain!landing-page'),
		
		urls: {
			featureOne: 	'/link_to',
			featureTwo: 	'/link_to',
			featureThr:		'/link_to',
			featureFou: 	'/link_to',
			sub1L:  		'/link_to',
			sub1R:  		'/link_to',
			sub2L:  		'/link_to',
			sub2R:  		'/link_to',
			sub3L:  		'/link_to',
			sub3R: 			'/link_to'
		},

		altText: {
			mainPromo: 	'string',
			featureOne: 'string',
			featureTwo: 'string',
			featureThr: 'string',
			featureFou: 'string',
			sub1L: 		'string',
			sub1R:  	'string',
			sub2L:  	'string',
			sub2R:  	'string',
			sub3L:  	'string',
			sub3R:  	'string'
		}, 

		news: {
			head: 		'string',
			sub: 		'string',
			linkLocat: 	'link_to', //full link. Assumes (target != !domain). 
			pone: 		'string',
			ptwo: 		'string',
			pthr: 		'string'
		},

		footnav: {
			fn01: 	'link_to',
			fn02: 	'link_to'
			// TODO: all the way up to 15, then add to replace task.
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
					obj.fileBottom
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
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: false
				},
				files: {
					'index.html': 'inline.html',     // 'destination': 'source'
				}
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
				}, {
					from: '!sub-1-L',
					to: obj.urls.sub1L
				}, {
					from: '!sub-1-R',
					to: obj.urls.sub1R
				}, {
					from: '!sub-2-L',
					to: obj.urls.sub2L
				}, {
					from: '!sub-2-R',
					to: obj.urls.sub2R
				}, {
					from: '!sub-3-L',
					to: obj.urls.sub3L
				}, {
					from: '!sub-3-R',
					to: obj.urls.sub3R
				}, {
					from: '!alt-sub-1-L',
					to: obj.altText.sub1L
				}, {
					from: '!alt-sub-1-R',
					to: obj.altText.sub1R
				}, {
					from: '!alt-sub-2-L',
					to: obj.altText.sub2L
				}, {
					from: '!alt-sub-2-R',
					to: obj.altText.sub2R
				}, {
					from: '!alt-sub-3-L',
					to: obj.altText.sub3L
				}, {
					from: '!alt-sub-3-R',
					to: obj.altText.sub3R
				}, {
					from: '!news-headline',
					to: obj.news.head
				}, {
					from: '!news-subhead',
					to: obj.news.sub
				}, {
					from: '!news-link',
					to: obj.news.linkLocat
				}, {
					from: '!news-pone',
					to: obj.news.pone
				}, {
					from: '!news-ptwo',
					to: obj.news.ptwo
				}, {
					from: '!news-pthr',
					to: obj.news.pthr
				}, {
					from: '!footnav-01',
					to: obj.footnav.fn01
				}, {
					from: '!footnav-02',
					to: obj.footnav.fn02
				} ]
			}
		}
	});

	// 3. Plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-inline-css');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	// 4. Tasks
	grunt.registerTask('default', [ 'less', 'concat:dist', 'inlinecss', 'replace', 'htmlmin']);
};


























