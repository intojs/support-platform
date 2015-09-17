import DashboardCtrl from './dashboard.ctrl';

describe('DashboardCtrl', () => {

	var dashboardCtrl,
		BugServ = {
			getOpenBugs: function() {
				return ['bug1', 'bug2', 'bug3'];
			},
			getClosedBugs: function() {
				return ['bug1', 'bug2', 'bug3'];
			},
			closedBugStatusName: function() {
				return 'dany';
			}
		};

	beforeEach(function() {
		dashboardCtrl = new DashboardCtrl(BugServ);
	});

    it('should have clusterOne defined', function() {
        expect(dashboardCtrl.clusterOne).toEqual(['bug1', 'bug2', 'bug3']);
    });

    it('should have clusterTwo defined', function() {
        expect(dashboardCtrl.clusterOne).toEqual(['bug1', 'bug2', 'bug3']);
    });

    it('should have options defined for the clusters', function () {
        expect(dashboardCtrl.clusterOneOpts).toBeDefined();
        expect(dashboardCtrl.clusterTwoOpts).toBeDefined();
    });

    it('should have a method called checkBugState which should alter a bug object', function() {
    	
    	spyOn(BugServ, 'closedBugStatusName').and.returnValue('Test2');


    	var before = [{
	    		statusCode: 30,
	    		statusName: 'Test1'
	    	}],
	    	after = [{
	    		statusCode: 90,
	    		statusName: 'Test2'
	    	}];

	   	dashboardCtrl.checkBugState(before, 'closed');

    	expect(before).toEqual(after);
    });
});