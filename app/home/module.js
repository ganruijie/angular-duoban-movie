/**
 * Created by ganruijie on 2016/12/12.
 */
(function (angular) {

    angular.module('movieHome',['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/home_page',{
                templateUrl:'./home/view.html'
            })
        }])
})(angular)