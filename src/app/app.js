'use strict';

/**
 *	Config.
 */

import angular from './adapters/angular.adapter';

import AppCtrl from './app.ctrl';

import appTpl from './app.tpl.html!text';

angular.module('app', [
		'ngRoute'
	])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
			controller: 'AppCtrl',
			controllerAs: 'appCtrl',
			template: appTpl
		});
	}])
	.controller('AppCtrl', AppCtrl);

/**
 *	Bootstrap angular.
 */

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});