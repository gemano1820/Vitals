'use strict';

angular.module('vitalsApp')
  .factory('AccountService', function ($location, $rootScope, $http, User, $cookieStore, $q, Appointment, MessageCenter) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      
       return {
          
          
          
     getAllDoctors: function() {
      
        var deferred = $q.defer();

        $http.get('/api/users/alldoctors').
        success(function(data) {
          deferred.resolve(data);
        }).
        error(function(err) {
          deferred.reject(err);
       
        }.bind(this));

        return deferred.promise;
      },    
      
      getUserAppointments: function (user){
           var deferred = $q.defer();

            $http.get('/api/appointments/getUserAppointment/'+user.currentUser).
            success(function(data) {
              deferred.resolve(data);
            }).
            error(function(err) {
              deferred.reject(err);

            }.bind(this));

             return deferred.promise;
      },
      
      cancelAppointment: function(appointment){
             var deferred = $q.defer();

            $http.put('/api/appointments/'+appointment._id, appointment).
            success(function() {
              deferred.resolve();
            }).
            error(function(err) {
              deferred.reject(err);

            }.bind(this));

             return deferred.promise;
      },

      
      bookAppointment: function(appointment, callback) {
        var cb = callback || angular.noop;

        return Appointment.save(appointment,
          function(data) {
            return cb(appointment);
          },
          function(err) {
            return cb(err);
          }.bind(this)).$promise;
      },
      
       sendMessage: function(messagecenter, callback) {
        var cb = callback || angular.noop;

        return MessageCenter.save(messagecenter,
          function(data) {
            return cb(messagecenter);
          },
          function(err) {
            return cb(err);
          }.bind(this)).$promise;
      },
      
      getSentMessage: function (user){
           var deferred = $q.defer();

            $http.get('/api/messagecenters/getSentItems/'+user.currentUser).
            success(function(data) {
              deferred.resolve(data);
            }).
            error(function(err) {
              deferred.reject(err);

            }.bind(this));

             return deferred.promise;
      },
      
      getInboxMessage: function (user){
           var deferred = $q.defer();

            $http.get('/api/messagecenters/getInbox/'+user.currentUser).
            success(function(data) {
              deferred.resolve(data);
            }).
            error(function(err) {
              deferred.reject(err);

            }.bind(this));

             return deferred.promise;
      },
      
      getDoctorAppointments: function (user){
           var deferred = $q.defer();

            $http.get('/api/appointments/getDoctorAppointment/'+user.currentUser).
            success(function(data) {
              deferred.resolve(data);
            }).
            error(function(err) {
              deferred.reject(err);

            }.bind(this));

             return deferred.promise;
      },
   };
  });
