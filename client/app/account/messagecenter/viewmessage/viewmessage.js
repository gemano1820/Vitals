'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/messagecenter/viewmessage', {
        templateUrl: 'app/account/messagecenter/viewmessage/viewmessage.html',
        controller: 'ViewmessageCtrl'
      });
  });
