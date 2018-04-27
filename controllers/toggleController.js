var application = angular.module('MyApp', []);
application.controller('MyController', function ($scope)
{
          //This will hide the DIV by default.
          $scope.IsVisible = false;
          $scope.ShowHide = function () {
              //If DIV is visible it will be hidden and vice versa.
              $scope.IsVisible = !$scope.IsVisible;
          }
      });
