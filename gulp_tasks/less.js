(function(){

    'use strict';

    module.exports = function(opts) {

    	var gulp = require('gulp'),
        	less = require('gulp-less'),
        	browserSync = require('browser-sync'),
        	plumber = require('gulp-plumber');

    	gulp.task('less', function() {
    		return gulp.src(opts.src)
    			.pipe(plumber({
                    errorHandler: function (err) {
                        console.log(err);
                        this.emit('end');
                    }
                }))
           		.pipe(less())
            	.pipe(gulp.dest(opts.dest))
            	.pipe(browserSync.stream());
    	});
    };
}());