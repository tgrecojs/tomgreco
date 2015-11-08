'use strict';

angular.module('yoTgApp')
    .controller('ContactCtrl', function($scope, $http) {

        $scope.sendForm = function() {
            var data = ({
                name: $scope.fullName,
                email: $scope.email,
                location: $scope.userLocation,
                reason: $scope.reason,
                phoneNumber: $scope.phoneNumber,
                message: $scope.message
            });

            $http.post('/api/clients', data)
                .success(function(data) {
                    $scope.data = data;
                    console.log(data);
                    $scope.myForm.$setPristine();
                })

            $scope.fullName = '';
            $scope.email = '';
            $scope.userLocation = '';
            $scope.reason = '';
            $scope.phoneNumber = '';
            $scope.message = '';
        }


    });