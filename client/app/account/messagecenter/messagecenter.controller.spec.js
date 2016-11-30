'use strict';

describe('Controller: MessagecenterCtrl', function () {

  // load the controller's module
  beforeEach(module('vitalsApp'));

  var MessagecenterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MessagecenterCtrl = $controller('MessagecenterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
