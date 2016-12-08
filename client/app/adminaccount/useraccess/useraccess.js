'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/adminaccount/useraccess', {
        templateUrl: 'app/adminaccount/useraccess/useraccess.html',
        controller: 'UseraccessCtrl'
      })
      .when('/adminaccount/deactivateusers', {
        templateUrl: 'app/adminaccount/useraccess/deactivateuser.html',
        controller: 'UseraccessCtrl'
      });
  });
