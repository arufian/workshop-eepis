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
			  dest: 'dist/js/app.js',
			}
		},
		uglify: {
			options: {
				preserveComments: 'some'
			},
			app: {
	      files: {
	        'dist/js/app.js': ['dist/js/app.js']
	      }
	    }
		},
		copy: {
			main: {
			  files: [{expand: true, src: ['css/*.css', 'templates/**/*'], dest: 'dist/', filter: 'isFile'},],
		  }
		},
		clean: {
			resources: ['dist/js', 'dist/css']
		},
		watch: {
	    options: {
	      livereload: true
	    },
	    resources: {
				files: ['js/*.js', 'templates/**/*.html', 'css/*.css', '*.html'],
				task: ['connect']
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
	grunt.registerTask('serve', ['connect', 'watch:resources']);
}
