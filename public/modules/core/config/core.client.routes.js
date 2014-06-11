'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});

		$stateProvider.
		state('get started', {
			url: '/get-started',
			templateUrl: 'modules/core/views/home.client.view.html'
		});

		$stateProvider.
		state('book', {
			url: '/books',
			templateUrl: 'modules/core/views/books.client.view.html'
		});

		$stateProvider.
		state('course', {
			url: '/courses',
			templateUrl: 'modules/core/views/home.client.view.html'
		});

		$stateProvider.
		state('timer', {
			url: '/timer',
			templateUrl: 'modules/core/views/home.client.view.html'
		});

		$stateProvider.
		state('blog', {
			url: '/blog',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);