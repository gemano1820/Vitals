'use strict';

describe('Controller: WhyvitalsCtrl', function () {

  // load the controller's module
  beforeEach(module('vitalsApp'));

  var WhyvitalsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhyvitalsCtrl = $controller('WhyvitalsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
