'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/account/home/home.html',
        controller: 'HomeCtrl'
      });
  });
