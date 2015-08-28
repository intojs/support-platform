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

	this.bugs = [
		{
			id: this.genId(), 
			title: 'This is the first project',
			severity: 1
		},{
			id: this.genId(),
			title: 'This is the second project with a really long name',
			severity: 2
		},{
			id: this.genId(),
			title: 'This is the third project',
			severity: 3
		}
	];

	return {
		getBugs: () => {
			return this.bugs;
		}
	}
};