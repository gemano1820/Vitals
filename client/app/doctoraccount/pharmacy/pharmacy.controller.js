'use strict';

angular.module('vitalsApp')
  .controller('DoctorPharmacyCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth, User) {
    $scope.message = 'Hello';
    
     $scope.currentUser = Auth.getCurrentUser();
        
    AccountService.getAllPatients().then(function(patients) {
	$scope.allPatients = patients;
    });
    
    $scope.goBackToHome = function(){
         $location.path('/doctoraccount/home');
      };
    
     $scope.prescribeRx = function(form) {
      $scope.submitted = true;

    //  if(form.$valid) {
        AccountService.prescribeRx({
          date: new Date(),
          doctor: $scope.currentUser._id,
          patient: $scope.pharmacy.patient,
          numberOfPills: $scope.pharmacy.rxQuantity,
          rxName:$scope.pharmacy.rxname,
          comment:  $scope.pharmacy.comments,
          isOrdered: false,
          active: true
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/doctoraccount/home');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
     // }
    };
    
  });
