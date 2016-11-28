'use strict';

angular.module('vitalsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      
      .when('/whyvitals', {
        templateUrl: 'app/whyvitals/whyvitals.html',
        controller: 'WhyVitalsCtrl'
      })
      
      .when('/patientlogin', {
        templateUrl: 'app/account/patientlogin/patientlogin.html',
        controller: 'PatientLoginCtrl'
      })
      
      .when('/pharmacy', {
        templateUrl: 'app/pharmacy/pharmacy.html',
        controller: 'PharmacyCtrl'
      })
      
      .when('/drugencyclopedia', {
        templateUrl: 'app/drugencyclopedia/drugencyclopedia.html',
        controller: 'DrugEncyclopediaCtrl'
      })
      
      .when('/appointment', {
        templateUrl: 'app/appointment/appointment.html',
        controller: 'AppointmentCtrl'
      })
      
      .when('/messagecenter', {
        templateUrl: 'app/messagecenter/messagecenter.html',
        controller: 'MessageCenterCtrl'
      })   
            
      .when('/settings', {
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });