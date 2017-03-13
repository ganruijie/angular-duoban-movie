/**
 * Created by ganruijie on 2016/12/13.
 */

(function (angular) {
    angular.module('jsonp',[])
        .service('myJsonp',['$window', function ($window) {
        var wd=$window.document;
        this.jsonp= function (url,params,callback) {

            url+='?';
            for(var k in params){
                url+=k+'='+params[k]+'&';
            }
//        因为callback没有名字，因此需要手动创建一个函数名
            var cbName='myJsonp_' + (new Date() - 0);
            url+='callback='+cbName;

            var script=wd.createElement('script');
            script.src=url;
            wd.body.appendChild(script);
            $window[cbName]= function (data) {
                callback(data);
            }
        }
    //函数调用
    //    myJsonp('https://api.douban.com/v2/movie/in_theaters',
    //        {count: 10, start: 1}, function(data) {
    //            console.log(data);
    //        })
    }])
})(angular)
