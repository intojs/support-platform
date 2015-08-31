'use strict';

import angular from 'src/app/adapters/angular.adapter';

import DashboardCtrl from './dashboard.ctrl';

import dashboardTpl from './dashboard.tpl.html!text';

angular.module('dashboard', [])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
			controller: 'DashboardCtrl',
			controllerAs: 'dashboardCtrl',
			template: dashboardTpl
		});
	}])
	.controller('DashboardCtrl', ['BugServ', DashboardCtrl]);

export default angular.module('dashboard');