'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/doctoraccount/messagecenter', {
        templateUrl: 'app/doctoraccount/messagecenter/messagecenter.html',
        controller: 'DoctorMessagecenterCtrl'
      });
  });
