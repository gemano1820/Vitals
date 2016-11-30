'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/healthsummary', {
        templateUrl: 'app/account/healthsummary/healthsummary.html',
        controller: 'HealthsummaryCtrl'
      });
  });
