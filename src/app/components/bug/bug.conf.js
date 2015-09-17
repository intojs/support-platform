/**
 *	bugs.conf.js
 */

import angular from 'src/app/adapters/angular.adapter';

import BugDirective from './bug.directive';

angular.module('bug', [])
	.directive('bug', BugDirective);

export default angular.module('bug');