'use strict';

angular.module('admin').controller('ManageUser', ['$scope','$http',function($scope,$http){

     $http.get('admin/users').success(function(data){
        $scope.users = data;
     });

    $scope.gridOptions = { 
        data: 'users',
        enableCellSelection: true
    };
}]);