var mockData = "json=" + encodeURI(JSON.stringify([{
    "name": "Christmas Eve",
        "country": "US",
        "date": "2015-12-24"
}, {
    "name": "Christmas",
        "country": "US",
        "date": "2015-12-25"
}, {
    "name": "First Day of Kwanzaa",
        "country": "US",
        "date": "2015-12-26"
}, {
    "name": "Second Day of Kwanzaa",
        "country": "US",
        "date": "2015-12-27"
}]));



var App = angular.module('myApp', []);

function DataCtrl($scope, $http) {

    $scope.phones = [];

    $scope.loadData = function () {
        var httpRequest = $http({
            method: 'POST',
            url: 'assets/data/pokedex.json'
           

        }).success(function (data, status) {
            $scope.items = data;
        });

    };
$scope.loadData();
}
  
