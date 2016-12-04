'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/messagecenter', {
        templateUrl: 'app/account/messagecenter/messagecenter.html',
        controller: 'MessagecenterCtrl'
      })
      .when('/compose', {
        templateUrl: 'app/account/messagecenter/compose/composemessage.html',
        controller: 'MessagecenterCtrl'
      })
       .when('/messagecenter/sentbox', {
        templateUrl: 'app/account/messagecenter/sentbox/sentbox.html',
        controller: 'SentboxCtrl'
      });
  });
