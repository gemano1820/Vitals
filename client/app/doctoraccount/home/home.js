'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/doctoraccount/home', {
        templateUrl: 'app/doctoraccount/home/home.html',
        controller: 'DoctorHomeCtrl'
      });
  });
