module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			withlibs: {
				options: {
					separator: '\n'
				},
				src: [
					'bower_components/angular/angular.js',
					'bower_components/ui-router/release/angular-ui-router.js',
					'bower_components/jquery/dist/jquery.js',
					'js/*', 
				],
			  dest: 'dist/app.js',
			},
			dev: {
				options: {
					separator: '\n'
				},
				src: [
					'bower_components/angular/angular.js',
					'bower_components/ui-router/release/angular-ui-router.js',
					'bower_components/jquery/dist/jquery.js',
					'js/main.js', 
					'js/route.js' 
				],
				dest: 'app.js',
			}
		},
		uglify: {
			options: {
				preserveComments: 'some'
			},
			app: {
	      files: {
	        'dist/app.js': ['dist/app.js']
	      }
	    }
		},
		copy: {
			main: {
			  files: [{
			  	expand: true, 
			  	src: ['css/*.css', 'templates/**/*', 'index.html'], 
			  	dest: 'dist/', 
			  	filter: 'isFile'
			  }],
		  }
		},
		clean: {
			resources: ['dist/js', 'dist/css'],
			dev: ['app.js']
		},
		watch: {
	    options: {
	      livereload: true
	    },
	    resources: {
				files: ['templates/**/*.html', 'css/*.css', '*.html'],
				task: ['connect']
	    },
	    javascript: {
	    	files: ['js/*.js'],
	    	task: ['clean:dev', 'concat:dev', 'connect']
	    }
		},
		connect: {
	    all: {
	      options:{
	        port: 8080,
	        livereload: true,
	        open: true
	      }
	    }
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');


	grunt.registerTask('deploy', ['clean:resources', 'concat:withlibs', 'uglify:app', 'copy']);
	grunt.registerTask('serve', ['clean:dev', 'concat:dev', 'connect', 'watch:resources', 'watch:javascript']);
}
