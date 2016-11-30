'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/appointment', {
        templateUrl: 'app/account/appointment/appointment.html',
        controller: 'AppointmentCtrl'
      });
  });
