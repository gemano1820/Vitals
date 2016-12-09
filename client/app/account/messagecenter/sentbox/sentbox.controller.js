'use strict';

angular.module('vitalsApp')
  .controller('SentboxCtrl', function ($location, $rootScope, $scope, $http, AccountService, Auth,  CommonService) {
    
     
    $scope.currentUser  = Auth.getCurrentUser();
    
     if($scope.currentUser.role == "patient"){
            $scope.homepath = 'home';
        }else if($scope.currentUser.role == "doctor"){
             $scope.homepath = 'doctoraccount/home';
        }else if($scope.currentUser.role == "staff"){
              $scope.homepath = 'staffaccount/home';
        }
        
      AccountService.getSentMessage({
          currentUser: $scope.currentUser ._id
        }).then(function(sendMessages) {
	$scope.sendMessages = sendMessages;
    });
    
      $scope.viewSentMessage = function(selectedMessage){
         CommonService.isSentMessage=true;
         CommonService.selectedMessage = selectedMessage;
         $location.path('/messagecenter/viewmessage');
    };
    
     $scope.goBackToHome = function(){
        if($scope.currentUser.role == "patient"){
            $location.path('/home');
            $scope.homepath = 'home';
        }else if($scope.currentUser.role == "doctor"){
             $location.path('doctoraccount/home');
             $scope.homepath = 'doctoraccount/home';
        }else if($scope.currentUser.role == "staff"){
             $location.path('staffaccount/home');
              $scope.homepath = 'staffaccount/home';
        }
    };
  });
