(function(){

    'use strict';

    module.exports = function(opts) {

    	var gulp = require('gulp'),
            plumber = require('gulp-plumber'),
        	htmlmin = require('gulp-minify-html');

    	gulp.task('html-min', function() {
            return gulp.src(opts.src)
                .pipe(plumber({
                    handleError: function(err) {
                        console.log(err);
                        this.emit('end');
                    }
                }))
                .pipe(htmlmin({
                    conditionals: true
                }))
                .pipe(gulp.dest(opts.dest));
        });
    };
}());