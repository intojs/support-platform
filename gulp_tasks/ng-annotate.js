'use strict';

module.exports = function (opts) {

	var gulp = require('gulp'),
		ngAnnotate = require('gulp-ng-annotate'),
		uglify = require('gulp-uglify'),
		plumber = require('gulp-plumber');

	gulp.task('ng-annotate', function() {
	  	return gulp.src(opts.dest)
	  		.pipe(plumber({
                errorHandler: function (err) {
                    console.log(err);
                    this.emit('end');
                }
            }))
	    	.pipe(ngAnnotate())
	    	.pipe(uglify())
	    	.pipe(gulp.dest(distPath));
	});
};