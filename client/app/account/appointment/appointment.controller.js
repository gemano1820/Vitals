'use strict';

angular.module('vitalsApp')
  .controller('AppointmentCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth, User) {
  
    
     $scope.selectedDoctors = null;
    $scope.allDoctors = [];
     var currentUser = Auth.getCurrentUser();
        
    AccountService.getAllDoctors().then(function(doctors) {
	$scope.allDoctors = doctors;
    });
    
    AccountService.getUserAppointments({
          currentUser: currentUser._id
        }).then(function(userAppointments) {
             userAppointments.forEach(function(userAppointment) {
                  userAppointment.active = false;
              });
               $scope.userAppointments = userAppointments;
    });
    
    $scope.logoutUser = function(){
        Auth.logout();
    };
    
    $scope.goBackToHome = function(){
         $location.path('/home');
    };
    
    
    
    $scope.cancelAppointment = function(){
        $scope.userAppointments.forEach(function(userAppointment) {
            if(userAppointment.active){
                userAppointment.active = false;
                AccountService.cancelAppointment(userAppointment).then(function(){
                    $location.path('/home');
                }).catch(function(err){
                    $scope.errors.other = err.message;
                })
            }
         });
    };
    
   $scope.bookAppointment = function(form) {
      $scope.submitted = true;

    //  if(form.$valid) {
        AccountService.bookAppointment({
          date: $scope.appointment.date,
          doctor: $scope.appointment.doctor,
          patient: currentUser._id,
          subject: $scope.appointment.subject,
          comment:  $scope.appointment.comments,
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
