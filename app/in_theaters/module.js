/**
 * Created by ganruijie on 2016/12/12.
 */
(function (angular) {
    angular.module('in_theaters',['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/in_theaters/:page?',{
                templateUrl:'./in_theaters/view.html',
                controller:'inTheaterController'
            })
        }])
         .controller('inTheaterController', ['$scope', '$http', '$routeParams','$route',
            'itcastJsonp', function ($scope, $http, $routeParams,$route, itcastJsonp) {
                console.log(itcastJsonp);
                $scope.pageSize = 5;
                $scope.curPage = $routeParams.page || 1;
                var moviceStart = ($scope.curPage - 1) * $scope.pageSize;
                $scope.getPage= function (current) {
                    if(current<=0 || current>$scope.totalPage){
                        return;
                    }
                    $route.updateParams({page:current});
                }
                itcastJsonp.jsonp('https://api.douban.com/v2/movie/in_theaters',
                    {start: moviceStart, count: $scope.pageSize},
                    function (data) {
                        console.log(data);
                        $scope.movie = data;
                        //计算总的页数
                        $scope.totalPage = Math.ceil(data.total / $scope.pageSize);
                        $scope.$apply();
                    })

            }])
        //.controller('inTheaterController',['$scope','$http', function ($scope,$http) {
        //    $http({
        //        url:'./in_theaters/data.json',
        //        method:'GET',
        //    }).then(function (response) {
        //        $scope.movie=response.data;
        //        console.log($scope.movie);
        //    }), function (response) {
        //        console.log(response)
        //    }
        //}])
})(angular)