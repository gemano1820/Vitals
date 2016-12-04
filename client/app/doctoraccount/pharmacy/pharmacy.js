'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/doctoraccount/pharmacy', {
        templateUrl: 'app/doctoraccount/pharmacy/pharmacy.html',
        controller: 'DoctorPharmacyCtrl'
      });
  });
