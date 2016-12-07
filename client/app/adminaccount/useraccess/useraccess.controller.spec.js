'use strict';

describe('Controller: UseraccessCtrl', function () {

  // load the controller's module
  beforeEach(module('vitalsApp'));

  var UseraccessCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UseraccessCtrl = $controller('UseraccessCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
