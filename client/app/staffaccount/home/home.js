'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/staffaccount/home', {
        templateUrl: 'app/staffaccount/home/home.html',
        controller: 'StaffHomeCtrl'
      });
  });
