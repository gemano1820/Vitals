'use strict';

angular.module('vitalsApp')
  .controller('LoginCtrl', function ($rootScope, $scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/home');
          $rootScope.currentUser = Auth.getCurrentUser();
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
