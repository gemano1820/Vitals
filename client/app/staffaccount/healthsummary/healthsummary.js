'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/staffaccount/healthsummary', {
        templateUrl: 'app/staffaccount/healthsummary/healthsummary.html',
        controller: 'HealthsummaryCtrl'
      });
  });
