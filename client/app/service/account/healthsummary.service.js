angular.module('vitalsApp')
  .factory('HealthSummary', function ($resource) {
    return $resource('/api/healthsummarys/:id/:controller', {
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

