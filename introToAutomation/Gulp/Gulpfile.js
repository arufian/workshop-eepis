var gulp = require('gulp'),
  opn = require('opn'),
  connect = require('gulp-connect'),
  // eol = require('gulp-eol'),
  historyApiFallback = require('connect-history-api-fallback');

gulp.task('connect', function(done) {
  connect.server({
    root: './',
    livereload: true,
    // middleware: function (){
    //     return [historyApiFallback];        
    // }
  });
  opn('http://localhost:8080/', done);
});

gulp.task('reload', function() {
    connect.reload();
});

gulp.task('watch', function() {
  gulp.watch(['js/*.js', 'templates/**/*', 'css/*.css', 'index.html'], ['reload']);
});

gulp.task('serve', ['connect', 'watch']);