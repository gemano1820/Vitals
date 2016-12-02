'use strict';

angular.module('vitalsApp')
  .factory('AccountService', function ($location, $rootScope, $http, User, $cookieStore, $q, Appointment) {
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

      
      bookAppointment: function(appointment, callback) {
        var cb = callback || angular.noop;

        return Appointment.save(appointment,
          function(data) {
            return cb(appointment);
          },
          function(err) {
            return cb(err);
          }.bind(this)).$promise;
      }
   };
  });
