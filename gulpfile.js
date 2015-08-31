(function() {
	
	'use strict';

	var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		del = require('del'),
		plumber = require('gulp-plumber'),
		gulpif = require('gulp-if'),
		KarmaServer = require('karma').Server,
		runSeq = require('run-sequence'),
		minifyCss = require('gulp-minify-css'),
		htmlmin = require('gulp-minify-html'),
		rev = require('gulp-rev'),
		useref = require('gulp-useref'),
		uglify = require('gulp-uglify'),
		revReplace = require('gulp-rev-replace'),
		file = require('gulp-file'),
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

	gulp.task('clean', function(callback) {
	  del([distPath + '/*'], callback);
	});

	require(tasksPath + '/less.js')({
    	src: basePath + '/less/main.less',
    	dest: basePath + '/css'
	});

	gulp.task('useref', function() {
	    var assets = useref.assets();
	    return gulp.src('./src/index.html')
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
	        .pipe(gulp.dest('dist'));
	});

	gulp.task('jspm-build', function(callback) {
		exec('jspm bundle-sfx src/app/app src/app/app.jspm.js --skip-source-maps', function(err, stdout, stderr) {
			callback(err);
		});
	});

	gulp.task('htmlmin', function() {
		return gulp.src('./dist/index.html')
			.pipe(plumber({
		    	handleError: function(err) {
		            console.log(err);
		            this.emit('end');
		        }
		    }))
			.pipe(htmlmin({
				conditionals: true
			}))
		    .pipe(gulp.dest('dist'));
	});

	gulp.task('copy-assets', function() {
		return gulp.src('./src/assets/**')
			.pipe(plumber({
		    	handleError: function (err) {
		            console.log(err);
		            this.emit('end');
		        }
		    }))
			.pipe(gulpif('*.css', minifyCss()))
			.pipe(gulp.dest('dist/assets'))
	});

	gulp.task('copy-fonts', function() {
		return gulp.src('./src/fonts/**')
			.pipe(plumber({
		    	handleError: function(err) {
		            console.log(err);
		            this.emit('end');
		        }
		    }))
			.pipe(gulp.dest('dist/fonts'))
	});

	gulp.task('create-empty-jspm-file', function() {
		var str = '';
		return gulp.src(basePath+'/app')
			.pipe(file('app.jspm.js', str))
			.pipe(gulp.dest(basePath+'/app'));
	});

	/**
	 *	--- Watch ---
	 */

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
                errorHandler: function(err) {
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
		runSeq(
			['clean'],
			['jspm-build', 'copy-assets', 'copy-fonts', 'less'],
			['useref'],
			['htmlmin', 'create-empty-jspm-file'],
			callback
		);
	});
}());