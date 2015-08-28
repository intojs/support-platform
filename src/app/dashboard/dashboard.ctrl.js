'use strict';

class DashboardCtrl {
	constructor($scope, BugServ) {

		this.$scope = $scope;

		this.clusterOne = BugServ.getBugs();

		this.clusterTwo = [];

		this.sortableOptions = {
    		containment: '#sortable-container'
  		};

		this.dragControlListeners = {
    		accept: function (sourceItemHandleScope, destSortableScope) {
    			return true;
    		},
    		itemMoved: function (event) {
    			console.log('itemMoved', event);
    		},
    		orderChanged: function(event) {
    			console.log('orderChanged', event);
    		},
    		containment: '#dashboard'
		};
	}
}

export default DashboardCtrl;