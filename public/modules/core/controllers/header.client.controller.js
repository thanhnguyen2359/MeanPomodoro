'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus','SessionService',
	function($scope, Authentication, Menus,SessionService) {
		$scope.Session = SessionService;
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		Menus.addMenuItem('topbar','HOME');
		Menus.addMenuItem('topbar','GET STARTED' , 'get-started');
		Menus.addMenuItem('topbar','BOOK' , 'books');
		Menus.addMenuItem('topbar','COURSE' , 'courses');
		Menus.addMenuItem('topbar','TIMER' , 'timer');
		Menus.addMenuItem('topbar','BLOG' , 'blog');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
]);