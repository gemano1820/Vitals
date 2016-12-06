'use strict';

angular.module('vitalsApp')
  .controller('MessagecenterCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth, CommonService) {
      $scope.selectedDoctors = null;
    $scope.allDoctors = [];
     $scope.currentUser  = Auth.getCurrentUser();
        
    AccountService.getAllDoctors().then(function(doctors) {
	$scope.allDoctors = doctors;
    });
    
    AccountService.getInboxMessage({
          currentUser: $scope.currentUser._id
        }).then(function(inboxMessages) {
	$scope.inboxMessages = inboxMessages;
    });
    
    $scope.goBackToHome = function(){
        if($scope.currentUser.role == "patient"){
            $location.path('/home');
        }else{
             $location.path('doctoraccount/home');
        }
    };
    
     $scope.viewMessage = function(selectedMessage){
         CommonService.isSentMessage=false;
         CommonService.selectedMessage = selectedMessage;
         $location.path('/messagecenter/viewmessage');
    };
    
    $scope.sendMessage = function(form) {
      $scope.submitted = true;

    //  if(form.$valid) {
        AccountService.sendMessage({
          date: Date(),
          emailTo: $scope.messagecenter.doctor,
          emailFrom: $scope.currentUser._id,
          subject: $scope.messagecenter.subject,
          content:  $scope.messagecenter.content,
          type: 'outbound',
          active: true
        })
        .then( function() {
          // Logged in, redirect to home
          alert("Message Sent Successfully")
          $location.path('/messagecenter');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
     // }
    };
    
      $scope.logoutUser = function(){
        Auth.logout();
    };
  });
