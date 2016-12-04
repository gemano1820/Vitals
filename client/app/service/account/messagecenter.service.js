angular.module('vitalsApp')
  .factory('MessageCenter', function ($resource) {
    return $resource('/api/messagecenters/:id/:controller', {
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

