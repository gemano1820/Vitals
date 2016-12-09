'use strict';

angular.module('vitalsApp')
  .controller('AdminHomeCtrl', function ($rootScope, $scope, Auth) {
    $scope.message = 'Hello';
    
     $scope.message = 'Hello';
    $scope.currentUser  = Auth.getCurrentUser();
  });
