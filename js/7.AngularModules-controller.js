 app.controller("myCtrlr", function($scope){
                    $scope.clickCounter = 0;
                    $scope.btnClicked = function() {
                           $scope.clickCounter++; 
                    }
        });