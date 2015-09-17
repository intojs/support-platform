(function(){

	'use strict';

	module.exports = function(opts) {

		var gulp = require('gulp'),
	    	exec = require('child_process').exec;

		gulp.task('jspm-build', function(callback) {
	        exec('jspm bundle-sfx '+opts.src+' '+opts.dest+' --skip-source-maps', function(err, stdout, stderr) {
	            callback(err);
	        });
	    });
	};
}());