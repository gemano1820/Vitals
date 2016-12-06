angular.module('vitalsApp')
  .factory('PharmacyCenter', function ($resource) {
    return $resource('/api/pharmacys/:id/:controller', {
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

