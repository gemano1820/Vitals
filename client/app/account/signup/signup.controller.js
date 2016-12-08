'use strict';

angular.module('vitalsApp')
  .controller('SignupCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.fname + " " + $scope.user.lname,
          email: $scope.user.email,
          password: $scope.user.password,
          role: $scope.user.role,
          date: Date(),
          active:false
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/accountreview');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

  });
