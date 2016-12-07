'use strict';

angular.module('vitalsApp')
  .controller('DoctorHomeCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth, User) {
    $scope.message = 'Hello';
  });
