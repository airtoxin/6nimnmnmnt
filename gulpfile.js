var gulp = require('gulp');
var browserify = require('gulp-browserify');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var mocha = require('gulp-mocha');
var sequence = require('gulp-run-sequence');
var watch = require('gulp-watch');

gulp.task('webserver', function () {
	return gulp.src('public')
		.pipe(webserver({
			livereload: true
		}));
});

gulp.task('watch', function (callback) {
	watch({glob: 'src/**/*.js'}, function () {
		gulp.start('compile');
		gulp.start('test');
	});
	watch({glob: 'test/**/*.js'}, function () {
		gulp.start('test');
	});
});

gulp.task('compile', function () {
	return gulp.src('src/*.js')
		.pipe(concat('main.js'))
		.pipe(browserify())
		.pipe(gulp.dest('public/js/'));
});

gulp.task('test', function () {
	return gulp.src('test/*')
		.pipe(mocha({reporter:'spec'}));
});

gulp.task('default', function (callback) {
	return sequence(['compile', 'watch', 'webserver'], callback);
});
