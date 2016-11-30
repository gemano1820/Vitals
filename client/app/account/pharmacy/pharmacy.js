'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pharmacy', {
        templateUrl: 'app/account/pharmacy/pharmacy.html',
        controller: 'PharmacyCtrl'
      });
  });
