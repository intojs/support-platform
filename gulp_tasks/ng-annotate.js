'use strict';

module.exports = function (opts) {

	var gulp = require('gulp'),
		ngAnnotate = require('gulp-ng-annotate'),
		uglify = require('gulp-uglify'),
		plumber = require('gulp-plumber');

	gulp.task('annotate-jspm-build-result', function() {
	  	return gulp.src(opts.src)
	  		.pipe(plumber({
                errorHandler: function (err) {
                    console.log(err);
                    this.emit('end');
                }
            }))
	    	// .pipe(ngAnnotate())
	    	.pipe(uglify())
	    	.pipe(gulp.dest(opts.dest));
	});
};