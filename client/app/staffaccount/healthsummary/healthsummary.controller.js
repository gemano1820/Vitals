'use strict';

angular.module('vitalsApp')
  .controller('StaffHealthsummaryCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth, CommonService) {
    $scope.message = 'Hello';
    
      $scope.currentUser  = Auth.getCurrentUser();
        
    AccountService.getAllDoctors().then(function(doctors) {
	$scope.allDoctors = doctors;
    });
    
    AccountService.getAllPatients().then(function(patients) {
	$scope.allPatients = patients;
    });
    
    $scope.submitHealthSummary = function(form) {
      $scope.submitted = true;

    //  if(form.$valid) {
        AccountService.submitHealthSummary({
          date: Date(),
          doctor: $scope.healthsummary.doctor,
          patient: $scope.healthsummary.patient,
          enteredBy: $scope.currentUser._id,
          testname: $scope.healthsummary.testname,
          testresults: $scope.healthsummary.testresults,
           normalrange: $scope.healthsummary.normalrange,
          comments:  $scope.healthsummary.comments,
          active: true
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/staffaccount/home');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
     // }
    };
    
     $scope.goBackToHome = function(){
         $location.path('/staffaccount/home');
    };
  });
