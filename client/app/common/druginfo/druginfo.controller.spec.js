'use strict';

describe('Controller: DruginfoCtrl', function () {

  // load the controller's module
  beforeEach(module('vitalsApp'));

  var DruginfoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DruginfoCtrl = $controller('DruginfoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
