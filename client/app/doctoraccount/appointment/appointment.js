'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/doctoraccount/appointment', {
        templateUrl: 'app/doctoraccount/appointment/appointment.html',
        controller: 'DoctorAppointmentCtrl'
      });
  });
