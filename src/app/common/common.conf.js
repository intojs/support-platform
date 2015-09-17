/**
 *	common.conf.js
 */

import angular from 'src/app/adapters/angular.adapter';

import BugServ from './bug.serv';

angular.module('common', []).factory('BugServ', BugServ);

export default angular.module('common');