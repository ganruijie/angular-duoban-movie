(function (angular) {
    // "use strict";

    // start your ride

    //angular.module('movie',['movieHome','in_theaters','coming_soon','top250','jsonp'])
    angular.module('movie',['movieHome','movie_detail.js','movieList','autoActive.js','jsonp'])
        .controller('mainController',['$scope','$location', function ($scope,$location) {
            $scope.query='';
            $scope.search= function () {
                $location.url('/search?q='+$scope.query);
            }
        }])
})(angular);