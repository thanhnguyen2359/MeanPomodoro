'use strict';

angular.module('admin').controller('ManageUser', ['$scope','$http',function($scope,$http){

     $http.get('admin/users').success(function(data){
        $scope.users = data;
     });

    $scope.gridOptions = { 
        data: 'users',
        enableCellSelection:true,
        enableCellEditOnFocus: true,
        columnDefs: [{field : 'Name' , displayName :'Full Name' , enableCellEdit : false},
                      {field : 'Provider' ,  enableCellEdit : false},
                      {field : 'Roles' ,enableCellEdit : false, 
                      cellTemplate : 'modules/admin/views/edituserrole.client.view.html'}]
    };

}]);