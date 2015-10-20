'use strict';

describe('Controller: MeetWithMeCtrl', function () {

  // load the controller's module
  beforeEach(module('yoTgApp'));

  var MeetWithMeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeetWithMeCtrl = $controller('MeetWithMeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
