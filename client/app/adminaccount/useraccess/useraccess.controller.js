'use strict';

angular.module('vitalsApp')
  .controller('UseraccessCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth, User) {
    $scope.message = 'Hello';
    
    $scope.currentUser  = Auth.getCurrentUser();
    
    AccountService.getAllUsers().then(function(users) {
         users.forEach(function(user) {
               user.status = user.active;
               user.active = false;
          });
	$scope.allUsers = users;
    });
    
     $scope.activateDeactivateUser = function(flag){
        $scope.allUsers.forEach(function(user) {
            if(user.active){
                user.active = flag;
                user.date = Date();
                AccountService.updateUser(user).then(function(){
                    $location.path('/adminaccount/home');
                }).catch(function(err){
                    $scope.errors.other = err.message;
                })
            }
         });
    };
    
   /*  $scope.deActivateUser = function(){
        $scope.allUsers.forEach(function(user) {
            if(user.active){
                user.active = false;
                userAppointment.date = Date();
                AccountService.activateUser(userAppointment).then(function(){
                    $location.path('/adminaccount/home');
                }).catch(function(err){
                    $scope.errors.other = err.message;
                })
            }
         });
    };*/
  });
