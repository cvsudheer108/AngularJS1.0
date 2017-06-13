var app = angular.module('myApp', []);
 var ctrl = app.controller("myCtrlr", function($scope){
                    $scope.clickCounter = 0;
                    $scope.btnClicked = function() {
                           $scope.clickCounter++; 
                    }
        });