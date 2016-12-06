'use strict';

angular.module('vitalsApp')
  .controller('ViewmessageCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth, CommonService) {
    $scope.message = 'Hello';
    
    $scope.messageContent = CommonService.selectedMessage;
    $scope.onReplyFlag = false;
    $scope.isSentMessage = CommonService.isSentMessage;
     var currentUser = Auth.getCurrentUser();
    
    
   $scope.onReply = function(){
        $scope.onReplyFlag = true;
    };
    
    $scope.backToInbox = function(){
        $location.path('/messagecenter');
    };
    
    
    $scope.sendMessage = function() {
      $scope.submitted = true;

    //  if(form.$valid) {
        AccountService.sendMessage({
          date: Date(),
          emailTo:  $scope.messageContent.emailFrom._id,
          emailFrom: currentUser._id,
          subject: "Re:" +  $scope.messageContent.subject,
          content:  $scope.replymessage.content,
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
