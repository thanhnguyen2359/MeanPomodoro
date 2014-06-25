'use strict';

angular.module('admin').controller('KiraForm',['$scope',function($scope){
	$scope.update = function(user){
		console.log('USER :');
		console.log(user);
	};
}]);