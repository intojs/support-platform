/**
 *	bug.ctrl.js
 */

'use strict';

class BugCtrl {

	constructor($scope) {
		this.id = $scope.id;
		this.title = $scope.title;
		this.severity = $scope.severity;
	}
}

export default BugCtrl;