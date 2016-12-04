'use strict';

angular.module('vitalsApp')
  .controller('SentboxCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth) {
    
     var currentUser = Auth.getCurrentUser();
      AccountService.getSentMessage({
          currentUser: currentUser._id
        }).then(function(sendMessages) {
	$scope.sendMessages = sendMessages;
    });
  });
