'use strict';

angular.module('vitalsApp')
  .controller('PharmacyCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth, User) {

    
      $scope.currentUser = Auth.getCurrentUser();
      
      $scope.logoutUser = function(){
        Auth.logout();
      };
    
      $scope.goBackToHome = function(){
         $location.path('/home');
      };
      
      AccountService.getUserPrescriptions({
          currentUser: $scope.currentUser._id
        }).then(function(userPrescriptions) {
               $scope.userPrescriptions = userPrescriptions;
    });
  });
