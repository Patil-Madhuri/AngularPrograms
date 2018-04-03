app.controller("calcCtrl", function ($scope)
{
    $scope.add_func = function add_func() {
        var a = Number($scope.first );
        var b = Number($scope.second );
        $scope.result = a + b;
        console.log($scope.result);
    }

    $scope.subt_func = function () {
        var a = Number($scope.first );
        var b = Number($scope.second);
        $scope.result = a - b;
    }

    $scope.multi_func = function () {
        var a = Number($scope.first);
        var b = Number($scope.second);
        $scope.result = a * b;
    }

    $scope.div_func = function () {
        var a = Number($scope.first );
        var b = Number($scope.second);
        $scope.result = a / b;
    }

    });
