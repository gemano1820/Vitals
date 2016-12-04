'use strict';

angular.module('vitalsApp')
  .controller('MessagecenterCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth, User) {
      $scope.selectedDoctors = null;
    $scope.allDoctors = [];
     var currentUser = Auth.getCurrentUser();
        
    AccountService.getAllDoctors().then(function(doctors) {
	$scope.allDoctors = doctors;
    });
    
    $scope.sendMessage = function(form) {
      $scope.submitted = true;

    //  if(form.$valid) {
        AccountService.sendMessage({
          date: Date(),
          emailTo: $scope.messagecenter.doctor,
          emailFrom: currentUser._id,
          subject: $scope.messagecenter.subject,
          content:  $scope.messagecenter.content,
          type: 'outbound',
          active: true
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/home');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
     // }
    };
  });
