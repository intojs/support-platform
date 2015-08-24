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
            'jspm_packages/github/components/jquery@2.1.4/jquery.min.js'
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