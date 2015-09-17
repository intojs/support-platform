/**
 *	bug.serv.js
 */

export default function() {

	this.genId = function () {
    	var text = "",
    		possible = "0123456789",
    		i;
    	for(i = 0; i < 8; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
   	 	return text;
	};

	this.openBugStatusName =  function () {
		return 'Open, Awaiting for Developer';
	};

	this.closedBugStatusName = function () {
		return 'Closed, Verified by Analist';
	};

	this.openBugs = [
		{
			id: this.genId(),
			title: 'There is a two pixel bug when shuffling',
			severity: 1,
			product: 'Orange Wallet System',
			version: '1.0',
			component: 'Carousel',
			classification: 'IT Online',
			statusCode: 45,
			statusName: this.openBugStatusName(),
			lastUpdate: '6 minutes ago'
		},{
			id: this.genId(),
			title: 'Wrong error displayed when selected the issue',
			severity: 2,
			product: 'Orange Film',
			version: '1.0',
			component: 'Add cinema form',
			classification: 'IT Online',
			statusCode: 45,
			statusName: this.openBugStatusName(),
			lastUpdate: '10 minutes ago'
		},{
			id: this.genId(),
			title: 'Wrong heading one color',
			severity: 3,
			product: 'Shop Locator',
			version: '2.0',
			component: 'Header',
			classification: 'IT Online',
			statusCode: 45,
			statusName: this.openBugStatusName(),
			lastUpdate: '20 minutes ago'
		}
	];

	this.closedBugs = [
		{
			id: this.genId(), 
			title: 'Cannot search for a registration',
			severity: 1,
			product: 'Prepay Registration',
			version: '1.0',
			component: 'Search records',
			classification: 'IT Online',
			statusCode: 90,
			statusName: this.closedBugStatusName(),
			lastUpdate: '45 minutes ago'
		},{
			id: this.genId(),
			title: 'Wrong error displayed when loggin into the app',
			severity: 2,
			product: 'Prepay Registration',
			version: '1.0',
			component: 'Login form',
			classification: 'IT Online',
			statusCode: 90,
			statusName: this.closedBugStatusName(),
			lastUpdate: '2 hours ago'
		},{
			id: this.genId(),
			title: 'The logo is on the right side',
			severity: 3,
			product: 'Prepay Registration',
			version: '1.0',
			component: 'Header',
			classification: 'IT Online',
			statusCode: 90,
			statusName: this.closedBugStatusName(),
			lastUpdate: '3 minutes ago'
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
	};
}