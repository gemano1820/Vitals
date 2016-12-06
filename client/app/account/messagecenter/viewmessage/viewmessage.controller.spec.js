'use strict';

describe('Controller: ViewmessageCtrl', function () {

  // load the controller's module
  beforeEach(module('vitalsApp'));

  var ViewmessageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewmessageCtrl = $controller('ViewmessageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
