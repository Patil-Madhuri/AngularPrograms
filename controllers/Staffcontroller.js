var app=angular.module("myApp",[]);
app.controller('staffcontroller', function($scope, $http)
{
  $http.get("staff.json").then(function(response)
{
  $scope.staffdata = response.data.staffRecord;

});
});
