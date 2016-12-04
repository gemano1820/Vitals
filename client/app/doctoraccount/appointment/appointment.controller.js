'use strict';

angular.module('vitalsApp')
  .controller('DoctorAppointmentCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth) {
    $scope.message = 'Hello';
    
     var currentUser = Auth.getCurrentUser();
    
    AccountService.getDoctorAppointments({
          currentUser: currentUser._id
        }).then(function(doctorAppointments) {
            
               $scope.doctorAppointments = doctorAppointments;
    });
    
     $scope.goBackToHome = function(){
         $location.path('/doctoraccount/home');
    };
  });
