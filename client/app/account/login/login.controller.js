'use strict';

angular.module('vitalsApp')
  .controller('LoginCtrl', function ($rootScope, $scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};
    
    $scope.loginError = "";

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function(currentUser) {
          // Logged in, redirect to home
            //var currentUser = Auth.getCurrentUser();
            if(currentUser.userRole == "patient"){
               $location.path('/home');
            }else if(currentUser.userRole == "doctor"){
               $location.path('/doctoraccount/home');
            }else if(currentUser.userRole == "admin"){
               $location.path('/adminaccount/home');
            }
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
          $scope.loginError = err.message;
        });
      }
    };

  });
