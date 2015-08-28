'use strict';

class AppCtrl {
	constructor($scope) {

		this.$scope = $scope;

		this.test = 12345;

		setTimeout(() => {
			this.test = 123456;

			this.$scope.$apply();
		}, 1000);
	}

	testing() {
		console.log('testing', this.$scope);
	}
}

export default AppCtrl;