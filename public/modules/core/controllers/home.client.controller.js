'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication','SessionService',
	function($scope, Authentication,SessionService) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.Session = SessionService;
	}
]);