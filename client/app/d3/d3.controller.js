'use strict';

angular.module('yoTgApp')
    .controller('D3Ctrl', function($scope) {
        $scope.message = 'Hello';
   

        // Create data arrays
        var data_1 = [10, 20];
        var data_2 = [10, 20, 30, 40];
        var data_3 = [10, 20, 30, 40, 50, 60];

        // Bind data_1 to the Selection
      var  circles = d3.selectAll('circle').data(data_2);
      
      circles.attr('r', function(d, i){ 
      	return d;
      })
    });