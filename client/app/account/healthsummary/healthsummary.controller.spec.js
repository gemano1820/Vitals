'use strict';

describe('Controller: HealthsummaryCtrl', function () {

  // load the controller's module
  beforeEach(module('vitalsApp'));

  var HealthsummaryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HealthsummaryCtrl = $controller('HealthsummaryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
