'use strict';

angular.module('vitalsApp')
  .controller('AppointmentCtrl', function ($rootScope, $scope, $http, AccountService) {
    $scope.message = 'Hello';
    
     $scope.selectedDoctors = null;
    $scope.allDoctors = [];
        
    AccountService.getAllDoctors().then(function(doctors) {
	$scope.allDoctors = doctors;
    });
    
   $scope.bookAppointment = function(form) {
      $scope.submitted = true;

    //  if(form.$valid) {
        AccountService.bookAppointment({
          date: $scope.appointment.date,
          doctor: $scope.appointment.doctor,
          patient: $rootScope.currentUser,
          subject: $scope.appointment.subject,
          comment:  $scope.appointment.comments,
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/home');
          $rootScope.currentUser = Auth.getCurrentUser();
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
     // }
    };
  });
