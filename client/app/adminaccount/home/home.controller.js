'use strict';

angular.module('vitalsApp')
  .controller('HomeCtrl', function ($rootScope, $scope, Auth) {
    $scope.message = 'Hello';
    
     $scope.message = 'Hello';
    $scope.currentUser  = Auth.getCurrentUser();
  });
