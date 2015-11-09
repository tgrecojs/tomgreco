'use strict';

angular.module('yoTgApp')
    .controller('ArrestsCtrl', function($scope, $http) {

        $scope.message = 'Hello';
        var baseUrl = 'http://localhost:1337/nflarrest.com/api/v1/';
        $scope.players = [];
        $scope.teamId = 'DAL';

        $scope.crimeQuery = 'DUI';

        $scope.getDataByTeam = function() {

        $http.get(baseUrl + 'team' + '/arrests/' + $scope.searchInput)
            .success(function(data) {
                $scope.teamArrests = data;
                console.log(data);
            })
            .error(function(err) {
                console.log('Error Getting Players');
                console.log(err);
            });

        };

        $scope.getDataByCrime = function() {

        $http.get(baseUrl + 'crime' + '/topPlayers/' + $scope.searchInput)
            .success(function(data) {
                $scope.players = data;
                console.log(data);
            })
            .error(function(err) {
                console.log('Error Getting Players');
                console.log(err);
            });

        };

    });