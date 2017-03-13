/**
 * Created by ganruijie on 2016/12/15.
 */
(function (angular) {
    angular.module('movie_detail.js',['ngRoute'])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when('/details/:id?',{
                templateUrl:'./movie_detail/view.html',
                controller:'detailController'
            })
        }])
        .controller('detailController',['$scope','$routeParams','myJsonp', function ($scope,$routeParams,myJsonp) {
            var id=$routeParams.id;
            console.log('123');
            myJsonp.jsonp('https://api.douban.com/v2/movie/subject/'+id,{}, function (data) {
                $scope.movieDetail=data;
                $scope.$apply();

            })
        }])
})(angular)