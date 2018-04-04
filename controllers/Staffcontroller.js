// app.controller('staffcontroller', function($scope, $http)
// {
//   $http.get("staff.json").then(function(response)
// {
//   $scope.staffdata = response.data.staffRecord;
//
// });
// });

app.controller('staffcontroller', function ($scope, readjson)
{
        $scope.information = readjson.getJson();
        $scope.information.then(function(response){
          $scope.jsonRecord = response;
          //console.log($scope.information);
        })

});
