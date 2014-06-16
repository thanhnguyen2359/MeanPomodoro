'use strict';

angular.module('admin').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// State routing
		$stateProvider.
		state('manage-user', {
			url: '/admin/manage-user',
			templateUrl: 'modules/admin/views/manage-user.client.view.html'
		});
}]);