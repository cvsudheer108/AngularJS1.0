 angular.module("myApp", [])
        .controller("ToggleController", function($scope) {
              //Properties
              $scope.visible = true; //default visibility
              //methods
              $scope.toggle = function() {
                                        $scope.visible = !$scope.visible;    
                                };      
         });