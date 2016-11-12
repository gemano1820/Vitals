/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/whyvitals', {
        templateUrl: 'app/whyvitals/whyvitals.html',
        controller: 'WhyVitalsCtrl'
      });
  });


