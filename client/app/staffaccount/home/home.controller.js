'use strict';

angular.module('vitalsApp')
  .controller('StaffHomeCtrl', function ($rootScope, $scope, Auth) {
     $scope.currentUser  = Auth.getCurrentUser();
  });
