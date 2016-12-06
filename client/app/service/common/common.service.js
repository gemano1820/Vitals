'use strict';

angular.module('vitalsApp')
  .service('CommonService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
      
      var _selectedMessage = {};
      var _isSentMessage = false;

      this.selectedMessage = _selectedMessage;
      this.isSentMessage = _isSentMessage;
   
  });
