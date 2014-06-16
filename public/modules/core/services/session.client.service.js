'use strict';

angular.module('core').service('SessionService',['$rootScope','$window','$http',
	function($rootScope, $window, $http){
	var session = {
		init :function(){
			this.resetSession();
		},
		resetSession : function(){
			this.user = null;
			this.isLoggedIn = false;
		},
		isRole : function(role){
			return this.user && this.user.roles.filter(function(val){
				return val === role;
			}).length > 0;
		},

		/*FACE BOOK Authentication*/
		facebookLogin: function(){
			var url = '/auth/facebook',
				width = 400,
				height = 300,
				top = (window.outerHeight - height) / 2,
				left = (window.outerWidth - width) / 2;
			$window.open(url, 'facebook_login','width=' + width + ',height=' + height + ',scrollbars=0,top=' + top + ',left=' + left);
		},
		logout: function(){
			var self = this;
			$http.get('/auth/signout').success(function(){
				self.resetSession();
				// $rootScope.$emit('session-changed');
			});
		},

		/*triggers*/
		authSuccess:function(userData){
			this.user = userData;
			this.isLoggedIn = true;
			// $rootScope.$emit('session-changed');
			console.log('Authentication success.');
		},
		authFail : function(){
			this.resetSession();
			console.log('Authentication fail.');
		}
	};

	session.init();
	return session;
}]);