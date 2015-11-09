'use strict';

describe('Controller: ArrestsCtrl', function () {

  // load the controller's module
  beforeEach(module('yoTgApp'));

  var ArrestsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArrestsCtrl = $controller('ArrestsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
