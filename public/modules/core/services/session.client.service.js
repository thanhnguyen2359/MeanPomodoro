'use strict';

angular.module('core').service('SessionService',['$window','$http',
	function($window, $http){
	var session = {
		init :function(){
			this.resetSession();
		},
		resetSession : function(){
			$window.user = null;
			this.isLoggedIn = false;
		},
		facebookLogin: function(){
			console.log('facebook login ...');
			var url = '/auth/facebook',
				width = 800,
				height = 600,
				top = (window.outerHeight - height) / 2,
				left = (window.outerWidth - width) / 2;
			$window.open(url, 'facebook_login','width=' + width + ',height=' + height + ',scrollbars=0,top=' + top + ',left=' + left);
		},
		logout: function(){
			$http.get('/auth/signout').success(function(){
				this.resetSession();
			});
		},

		/*triggers*/
		authSuccess:function(userData){
			this.user = userData;
			this.isLoggedIn = true;
			console.log('Autehntication success.');
		},
		authFail : function(){
			this.resetSession();
			console.log('Authentication fail.');
		}
	};

	session.init();
	return session;
}]);