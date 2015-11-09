'use strict';

angular.module('yoTgApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('arrests', {
        url: '/arrests',
        templateUrl: 'app/arrests/arrests.html',
        controller: 'ArrestsCtrl'
      });
  });