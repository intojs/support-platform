/**
 *	bug.ctrl.js
 */

class BugCtrl {

	constructor($scope, BugServ) {
		
		this.id = $scope.id;
		this.title = $scope.title;
		this.severity = $scope.severity;
		this.product = $scope.product;
		this.version = $scope.version;
		this.component = $scope.component;
		this.classification = $scope.classification;
		this.statusCode = $scope.statusCode;
		this.statusName = $scope.statusName;
		this.lastUpdate = $scope.lastUpdate;

		this.deleteBug = function (id) {
			if (!id) return;
			BugServ.deleteBug(id);
		};
	}
}

export default BugCtrl;