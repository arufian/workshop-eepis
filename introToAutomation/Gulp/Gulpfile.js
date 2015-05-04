// development phase
var gulp = require('gulp'),
  opn = require('opn'),
  connect = require('gulp-connect'),
  historyApiFallback = require('connect-history-api-fallback');

// deployment process
var concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  del = require('del');

// development phase task
gulp.task('cleandev', function(cb) {
  del(['app.js'], cb);
});

gulp.task('scriptsdev', ['cleandev'], function() {
  return gulp.src([
					'./bower_components/angular/angular.js',
					'./bower_components/ui-router/release/angular-ui-router.js',
					'./bower_components/jquery/dist/jquery.js',
					'./js/main.js', 
					'./js/route.js', 
				])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('reload', function() {
    connect.reload()
});

gulp.task('reloadjs', ['scriptsdev'], function() {
    connect.reload();
});

gulp.task('watch', function() {
  gulp.watch(['./templates/**/*.html', './css/*.css', './index.html'], ['reload']);
  gulp.watch(['./js/*.js'], ['reloadjs']);
});

gulp.task('connect', function(done) {
  connect.server({
    root: './',
    livereload: true
  });
  opn('http://localhost:8080/', done);
});

gulp.task('serve', ['scriptsdev', 'watch', 'connect']);

// deployment phase
gulp.task('clean', function(cb) {
  del(['dist'], cb);
});
gulp.task('scripts', ['clean'],  function() {
  return gulp.src([
					'./bower_components/angular/angular.js',
					'./bower_components/ui-router/release/angular-ui-router.js',
					'./bower_components/jquery/dist/jquery.js',
					'./js/*', 
				])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('uglify', ['scripts'], function() {
	return gulp.src('./dist/app.js')
		.pipe(uglify({preserveComments:'some'}))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('copy', ['clean'], function() {
	return gulp.src(['css/*.css', 'templates/**/*.html', 'index.html'], {base: './'})
		.pipe(gulp.dest('./dist/'));
});

gulp.task('deploy', ['uglify', 'copy']);
