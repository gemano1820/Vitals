'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/messagecenter', {
        templateUrl: 'app/account/messagecenter/messagecenter.html',
        controller: 'MessagecenterCtrl'
      });
  });
