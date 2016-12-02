angular.module('vitalsApp')
  .factory('Appointment', function ($resource) {
    return $resource('/api/appointments/:id/:controller', {
      id: '@_id'
    }
   /* {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  }*/
                  );
  });

