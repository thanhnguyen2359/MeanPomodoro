'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function($) {
	// Init module configuration options
	var applicationModuleName = 'promodoro';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies',  'ngAnimate',  'ngTouch', 
	'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils','ui','ngGrid'];

	var jQueryPlugins = [{
		directiveName:'datatable',
		pluginFn : 'dataTable'
	}];

	// Add a new vertical module
	var registerModule = function(moduleName) {
		// Create angular module
		angular.module(moduleName, []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	var registerPlugin = function(moduleName,directiveName,pluginFn){
		angular.module(moduleName).directive(directiveName,function(){
			return {
				restrict:'A',
				link:function(scope,element,attrs){
					$(element)[pluginFn](scope.$eval(attrs.options));
				}
			};
		});
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule,
		registerPlugin : registerPlugin,
		jQueryPlugins:jQueryPlugins
	};
})(window.jQuery);