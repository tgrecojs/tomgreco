'use strict';

describe('Controller: D3Ctrl', function () {

  // load the controller's module
  beforeEach(module('yoTgApp'));

  var D3Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    D3Ctrl = $controller('D3Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
