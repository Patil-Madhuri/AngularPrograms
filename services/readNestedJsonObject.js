$http({method: 'GET', url: 'artist.json'}).success(function(data) {
    $scope.artists = [];
    angular.forEach(data.artists, function(value, key) {
        $scope.artists.push(value);
    });
    $scope.isVisible = function(name){
        return true;// return false to hide this artist's albums
    };
});
