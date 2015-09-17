/**
 *	Config.
 */

import angular from './adapters/angular.adapter';

// Common,
import common from './common/common.conf';

// Sections.
import dashboard from './dashboard/dashboard.conf';

// Components.
import bug from './components/bug/bug.conf';

angular.module('app', [
	'ngRoute',
	'as.sortable',
	common.name,
	dashboard.name,
	bug.name
]);
	
/**
 *	Bootstrap angular.
 */

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});