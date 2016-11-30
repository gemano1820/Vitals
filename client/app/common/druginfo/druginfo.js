'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/druginfo', {
        templateUrl: 'app/common/druginfo/druginfo.html',
        controller: 'DruginfoCtrl'
      });
  });
