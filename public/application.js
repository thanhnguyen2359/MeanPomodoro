'use strict';

(function($,undefined){
	//Start by defining the main module and adding the module dependencies
	angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

	// Setting HTML5 Location Mode
	angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
		function($locationProvider,$window,SessionService) {
			$locationProvider.hashPrefix('!');
		}
	]).run(['$window','$rootScope','SessionService',function($window,$rootScope,SessionService){
		console.log("Bootstrapp globals...");

		$window.app = {
				authState : function(user){
					$rootScope.$apply(function(){
						if(user){
							$window.user = user;
						SessionService.authSuccess(user);
						}else{
							SessionService.authFail();
						}
					});
					
				}
			}

		$rootScope.Session = SessionService;
		if($window.user){
			$window.app.authState($window.user);
		}
	}]);


	//Then define the init function for starting up the application
	angular.element(document).ready(function() {
		// //Fixing facebook bug with redirect
		// if (window.location.hash === '#_=_') window.location.hash = '#!';
		//Then init the app
		angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
			//Fixing facebook bug with redirect
		if (window.location.hash === '#_=_' || window.location.hash === "") window.location.hash = '#!';
	});
})(window.jQuery);

