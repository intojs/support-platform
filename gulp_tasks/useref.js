(function(){

    'use strict';

    module.exports = function(opts) {

    	var gulp = require('gulp'),
            useref = require('gulp-useref'),
            plumber = require('gulp-plumber'),
            gulpif = require('gulp-if'),
            uglify = require('gulp-uglify'),
            minifyCss = require('gulp-minify-css'),
            rev = require('gulp-rev'),
            revReplace = require('gulp-rev-replace');

        gulp.task('useref', function(callback) {
            var assets = useref.assets();
            return gulp.src(opts.src)
                .pipe(plumber({
                    handleError: function(err) {
                        console.log(err);
                        this.emit('end');
                    }
                }))
                .pipe(assets)
                .pipe(gulpif('*.js', uglify()))
                .pipe(gulpif('*.css', minifyCss()))
                .pipe(rev())
                .pipe(assets.restore())
                .pipe(useref())
                .pipe(revReplace())
                .pipe(gulp.dest(opts.dest));
        });
    };
}());