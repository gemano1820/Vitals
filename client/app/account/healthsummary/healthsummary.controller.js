'use strict';

angular.module('vitalsApp')
  .controller('UserHealthsummaryCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth, User) {

     $scope.currentUser = Auth.getCurrentUser();
     
      AccountService.getUserHealthSummary({
          currentUser: $scope.currentUser._id
        }).then(function(healthsummaries) {
               $scope.allTestResults = healthsummaries;
    });
    
    $scope.goBackToHome = function(){
         $location.path('/home');
    };
  });
