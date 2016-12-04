'use strict';

describe('Controller: PharmacyCtrl', function () {

  // load the controller's module
  beforeEach(module('vitalsApp'));

  var PharmacyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PharmacyCtrl = $controller('PharmacyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
