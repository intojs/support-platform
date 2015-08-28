(function() {
	
	'use strict';

	var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		plumber = require('gulp-plumber'),
		KarmaServer = require('karma').Server,
		runSeq = require('run-sequence'),
		exec = require('child_process').exec;

	/**
	 *  --- Settings --- 
	 */

	var tasksPath = './gulp_tasks',
	    basePath = './src',
	    distPath = './dist';
	
   /**
    *	--- Tasks ---
    */

    require(tasksPath + '/browser-sync.js')({
    	baseDir: basePath,
    	port: 4000,
    	browser: 'google chrome',
    	routes: {
    		"/": './'
    	}
	});

	require(tasksPath + '/less.js')({
    	src: basePath + '/less/main.less',
    	dest: basePath + '/css'
	});

	require(tasksPath + '/ng-annotate.js')({
    	dest: distPath+'/*.js'
	});

	gulp.task('jspm-build', function(callback) {
		exec('jspm bundle-sfx src/app/app dist/app.min.js --skip-source-maps', function(err, stdout, stderr) {
			callback(err);
		});
	});
 
	gulp.task('jspm-finalize-build', function(callback) {
		runSeq(
			'jspmBuild',
			['annotate'],
			callback
		);
	});

	gulp.task('watch', function() {

		gulp.watch(basePath+'/**/*.html', browserSync.reload);

		gulp.watch(basePath+'/app/**/*.js', browserSync.reload);

		gulp.watch(basePath+'/**/*.less', ['less']);

		gulp.watch([
			basePath + '/css/**/*.css',
			'!'+basePath+'/css/main.css'
		], function(ev) {
        	gulp.src(ev.path, { read: false })
        		.pipe(plumber({
                errorHandler: function (err) {
                    console.log(err);
                    this.emit('end');
                }
            }))
        		.pipe(browserSync.stream());
    	});
	});

	/**
	 *  --- Dev --- 
	 */

	gulp.task('dev', function(callback) {
		runSeq(
			'less',
			['browserSync'],
			'watch',
			callback
		);
	});

	/**
	 *  --- Test --- 
	 */

	gulp.task('test', function(callback) {
	  	new KarmaServer({
			configFile: __dirname + '/karma/karma.conf.js',
			singleRun: false
		}, callback).start();
	});

	/**
	 *  --- Build --- 
	 */

	gulp.task('build', function(callback) {

	});
}());