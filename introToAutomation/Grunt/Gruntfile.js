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
				mangle: false,
				preserveComments: 'false'
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
				files: ['js/*.js', 'templates/**/*', 'css/*.css', 'index.html'],
				task: ['connect']
	    }
		},
		connect: {
	    all: {
	      options:{
	        port: 8080,
	        hostname: '0.0.0.0',
	        keepalive: true,
	        livereload: true,
	        open: true
	      }
	    }
	  },
	  open: {
	    all: {
	      path: 'http://localhost:<%= connect.all.options.port%>'
	    }
	  },
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');


	grunt.registerTask('deploy', ['clean:resources', 'concat:withlibs', 'uglify:app', 'copy']);
	grunt.registerTask('serve', ['connect', 'watch']);
}
