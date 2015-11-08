'use strict';

angular.module('yoTgApp')
    .controller('MainCtrl', function($scope, $http) {
        $scope.awesomeThings = [];

        $http.get('/api/things').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        $scope.submitEmail = function() {
            var data = ({
                email: $scope.email
            });

            $http.post('/api/subscribers', data)
                .success(function(data) {
                    $scope.data = data;
                    console.log(data);
                    $scope.myForm.$setPristine();
                })

            $scope.email = '';
        };
    
    });