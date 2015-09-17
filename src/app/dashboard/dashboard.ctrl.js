class DashboardCtrl {
	constructor(BugServ) {

        this.clusterOne = BugServ.getOpenBugs();

		this.clusterTwo = BugServ.getClosedBugs();

        this.checkBugState = function (cluster, type) {

            if (!cluster || !type) throw new Error('DashboardCtrl: You have not supplied a cluster or a type for the checkBugState function');

            if (!angular.isArray(cluster)) throw new Error('DashboardCtrl: the cluster param is not an objecy');

            if (typeof type !== 'string') throw new Error('DashboardCtrl: the type param is not of type string');

            cluster.filter((bug) => {
                if (type === 'closed') {
                    bug.statusCode = 90;
                    bug.statusName = BugServ.closedBugStatusName();
                }
                if (type === 'open') {
                    bug.statusCode = 45;
                    bug.statusName = BugServ.openBugStatusName();
                }
            });
        };

		this.clusterOneOpts = {
    		containment: '#dashboard',
            itemMoved: (ev) => {
                this.checkBugState(this.clusterTwo, 'closed');
            }
        };

        this.clusterTwoOpts = {
            containment: '#dashboard',
            itemMoved: (ev) => {
                this.checkBugState(this.clusterOne, 'open');
            }
        };
	}
}

export default DashboardCtrl;