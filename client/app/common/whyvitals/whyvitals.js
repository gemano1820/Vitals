'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/whyvitals', {
        templateUrl: 'app/common/whyvitals/whyvitals.html',
        controller: 'WhyvitalsCtrl'
      });
  });
