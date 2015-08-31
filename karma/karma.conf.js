module.exports = function (config) {

    'use strict';

    config.set({

        basePath: './../',
        
        frameworks: ['jspm', 'jasmine'],

        jspm: {
            loadFiles: ['src/**/*.spec.js'],
            serveFiles: ['src/**/!(*spec).js']
        },

        files: [
            'jspm_packages/github/components/jquery@2.1.4/jquery.js',
            'jspm_packages/github/angular/bower-angular@1.4.4/angular.js',
            'jspm_packages/github/angular/bower-angular-route@1.4.4/angular-route.js',
            'jspm_packages/github/a5hik/ng-sortable@1.3.0/ng-sortable.js'
        ],

        exclude: [],

        preprocessors: {},

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['Chrome']
    });
};