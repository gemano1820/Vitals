'use strict';

describe('Controller: SentboxCtrl', function () {

  // load the controller's module
  beforeEach(module('vitalsApp'));

  var SentboxCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SentboxCtrl = $controller('SentboxCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
