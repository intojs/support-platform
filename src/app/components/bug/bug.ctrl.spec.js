/**
 *	bug.ctrl.spec.js
 */

import BugCtrl from './bug.ctrl';

describe('bug.ctrl: ', function() {

	var bugCtrl,
		$scope,
		BugServ;

	beforeEach(module('app'));

	beforeEach(inject(function($rootScope, _BugServ_) {
		$scope = $rootScope.$new();
		BugServ = _BugServ_;

		bugCtrl = new BugCtrl($scope, BugServ);
	}));

	it('should have a delete bug method', function() {

		spyOn(BugServ, 'deleteBug').and.returnValue(true);

		bugCtrl.deleteBug(33);

		expect(BugServ.deleteBug).toHaveBeenCalled();
	});
});