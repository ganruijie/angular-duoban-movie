/**
 * Created by ganruijie on 2016/12/12.
 */
(function (angular) {
    angular.module('movieList', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/:movieType/:page?', {
                templateUrl: './movie_list/view.html',
                controller: 'movieListController'
            })
        }])
        .controller('movieListController', ['$scope', '$http', '$routeParams','$route',
            'myJsonp', function ($scope, $http, $routeParams,$route, myJsonp) {
                $scope.pageSize = 5;
                $scope.curPage = $routeParams.page || 1;
                var moviceStart = ($scope.curPage - 1) * $scope.pageSize;
                $scope.getPage= function (current) {
                    if(current<=0 || current>$scope.totalPage){
                        return;
                    }
                    //$scope.updateParams的作用就是用来更新路由中的路由参数，也就是上文中的$routeParams.page对象
                    $route.updateParams({page:current})
                }
                myJsonp.jsonp('https://api.douban.com/v2/movie/'+$routeParams.movieType,
                    {
                        start: moviceStart,
                        count: $scope.pageSize,
                        q:$routeParams.q
                    },
                    function (data) {
                        $scope.isload=true;
                        $scope.movie = data;
                        //计算总的页数
                        $scope.totalPage = Math.ceil(data.total / $scope.pageSize);
                        $scope.$apply();
                    })


                //$http({
                //    method:'GET',
                //    url:'./coming_soon/data.json'
                //}).then(function (response) {
                //    $scope.movie=response.data;
                //}),function (response) {
                //    console.log(response)
                //}

                //console.log($http.get('./coming_soon/data.json'))
                //$http.get('./coming_soon/data.json').success(function (response) {
                //    $scope.movie=response;
                //    console.log($scope.movie);
                //}).error(function (err) {
                //    console.log(err);
                //})
            }])
})(angular)