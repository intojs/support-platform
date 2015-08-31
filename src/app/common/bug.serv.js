/**
 *	bug.serv.js
 */

'use strict';

export default function() {

	this.genId = function () {
    	var text = "",
    		possible = "0123456789",
    		i;
    	for(i = 0; i < 8; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
   	 	return text;
	};

	this.openBugStatusName =  function () {
		return 'Open, Awaiting for Review';
	};

	this.closedBugStatusName = function () {
		return 'Closed, Verified by Filer';
	}

	this.openBugs = [
		{
			id: this.genId(),
			title: 'Wrong error displayed when selected the issue',
			severity: 1,
			product: 'Oracle Database',
			version: 'Enterprise Edition',
			component: 'Maintenance Wizard',
			classification: 'Active Participant',
			statusCode: 30,
			statusName: this.openBugStatusName(),
			lastUpdate: '5 minutes ago'
		},{
			id: this.genId(),
			title: 'Wrong error displayed when selected the issue',
			severity: 2,
			product: 'Oracle Database',
			version: 'Enterprise Edition',
			component: 'Maintenance Wizard',
			classification: 'Engineering Research',
			statusCode: 30,
			statusName: this.openBugStatusName(),
			lastUpdate: '5 minutes ago'
		},{
			id: this.genId(),
			title: 'Wrong error displayed when selected the issue',
			severity: 3,
			product: 'Oracle Database',
			version: 'Enterprise Edition',
			component: 'Maintenance Wizard',
			classification: 'Active Participant',
			statusCode: 30,
			statusName: this.openBugStatusName(),
			lastUpdate: '5 minutes ago'
		}
	];

	this.closedBugs = [
		{
			id: this.genId(), 
			title: 'Wrong error displayed when selected the issue',
			severity: 1,
			product: 'Oracle Database',
			version: 'Enterprise Edition',
			component: 'Maintenance Wizard',
			classification: 'Active Participant',
			statusCode: 90,
			statusName: this.closedBugStatusName(),
			lastUpdate: '5 minutes ago'
		},{
			id: this.genId(),
			title: 'Wrong error displayed when selected the issue',
			severity: 2,
			product: 'Oracle Database',
			version: 'Enterprise Edition',
			component: 'Maintenance Wizard',
			classification: 'Engineering Research',
			statusCode: 90,
			statusName: this.closedBugStatusName(),
			lastUpdate: '5 minutes ago'
		},{
			id: this.genId(),
			title: 'Wrong error displayed when selected the issue',
			severity: 3,
			product: 'Oracle Database',
			version: 'Enterprise Edition',
			component: 'Maintenance Wizard',
			classification: 'Active Participant',
			statusCode: 90,
			statusName: this.closedBugStatusName(),
			lastUpdate: '5 minutes ago'
		}
	];

	this.deleteBug = (id) => {
		if (!id) return;

		this.openBugs.filter((bug, index) => {
			if (bug.id === id) this.openBugs.splice(index, 1);
		});
	};

	return {
		openBugStatusName: this.openBugStatusName,
		closedBugStatusName: this.closedBugStatusName,
		getOpenBugs: () => {
			return this.openBugs;
		},
		getClosedBugs: () => {
			return this.closedBugs;
		},
		deleteBug: this.deleteBug
	}
};