'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/adminaccount/home', {
        templateUrl: 'app/adminaccount/home/home.html',
        controller: 'HomeCtrl'
      });
  });
