/**
 *	bug.directive.js
 */

import BugCtrl from './bug.ctrl';

import bugTpl from './bug.tpl.html!text';

export default function() {

	'use strict';

	return {
		restrict: 'EA',
		scope: {
			id: '=bugId',
			title: '=bugTitle',
			severity: '=bugSeverity',
			product: '=bugProduct',
			version: '=bugVersion',
			component: '=bugComponent',
			classification: '=bugClassification',
			statusCode: '=bugStatusCode',
			statusName: '=bugStatusName',
			lastUpdate: '=bugLastUpdate'
		},
		controller: ['$scope', 'BugServ', BugCtrl],
		controllerAs: 'bugCtrl',
		template: bugTpl
	};
}