'use strict';

angular.module('vitalsApp')
  .controller('UseraccessCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth, User) {
    $scope.message = 'Hello';
    
    $scope.currentUser  = Auth.getCurrentUser();
    $scope.activeUsers = [];
    $scope.inactiveUsers= [];
    
    AccountService.getAllUsers().then(function(users) {
         users.forEach(function(user) {
             
             if(user.active){
                 $scope.activeUsers.push(user);
                  user.status = user.active;
                  user.active = false;
             }else{
                 $scope.inactiveUsers.push(user);
                  user.status = user.active;
                  user.active = false;
             }
              
          });
	//$scope.allUsers = users;
    });
    
     $scope.activateUser = function(){
        $scope.inactiveUsers.forEach(function(user) {
            if(user.active){
                user.active = true;
                user.date = Date();
                AccountService.updateUser(user).then(function(){
                    $location.path('/adminaccount/home');
                }).catch(function(err){
                    $scope.errors.other = err.message;
                })
            }
         });
    };
    
    $scope.deactivateUser = function(){
        $scope.activeUsers.forEach(function(user) {
            if(user.active){
                user.active = false;
                user.date = Date();
                AccountService.updateUser(user).then(function(){
                    $location.path('/adminaccount/home');
                }).catch(function(err){
                    $scope.errors.other = err.message;
                })
            }
         });
    };
  });
