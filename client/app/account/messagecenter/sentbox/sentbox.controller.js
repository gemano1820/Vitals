'use strict';

angular.module('vitalsApp')
  .controller('SentboxCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth,  CommonService) {
    
     var currentUser = Auth.getCurrentUser();
      AccountService.getSentMessage({
          currentUser: currentUser._id
        }).then(function(sendMessages) {
	$scope.sendMessages = sendMessages;
    });
    
      $scope.viewSentMessage = function(selectedMessage){
         CommonService.isSentMessage=true;
         CommonService.selectedMessage = selectedMessage;
         $location.path('/messagecenter/viewmessage');
    };
  });
