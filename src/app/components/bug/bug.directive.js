/**
 *	bug.directive.js
 */

'use strict';

import BugCtrl from './bug.ctrl';

import bugTpl from './bug.tpl.html!text';

export default function() {
	return {
		restrict: 'EA',
		scope: {
			id: '=bugId',
			title: '=bugTitle',
			severity: '=bugSeverity'
		},
		controller: BugCtrl,
		controllerAs: 'bugCtrl',
		template: bugTpl
	}
}