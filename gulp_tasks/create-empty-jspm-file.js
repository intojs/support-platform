(function(){

	'use strict';

	module.exports = function(opts) {

		var gulp = require('gulp'),
	    	file = require('gulp-file');

		gulp.task('create-empty-jspm-file', function() {
	        var str = '';
	        return gulp.src(opts.src)
	            .pipe(file(opts.fileName, str))
	            .pipe(gulp.dest(opts.dest));
	    });
	};
}());