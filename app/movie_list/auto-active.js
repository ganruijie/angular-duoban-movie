/**
 * Created by ganruijie on 2016/12/15.
 */
(function (angular) {
    angular.module('autoActive.js',[])
        .directive('autoActive',['$location',function ($location) {
            return{
                link: function (scope,element) {
                    // 根据url，获取url的参数，然后，与当前元素的子元素a的href属性进行匹配
                    // 如果匹配成功了，就给当前元素添加类
                    //
                    // 可以通过 $location.url() 获取到url的值
                    // 要目：只要url的值发生了变化，样式就要重新计算
                    scope.location=$location;
                    scope.$watch('location.url()', function (newValue) {
                        var alink=element.children().attr('href');
                        if(alink.indexOf(newValue)>-1){
                            //不匹配，则将element中的样式active完全清除
                            element.parent().children().removeClass('active');
                            //再给当前element添加active样式
                            element.addClass('active');
                        }
                    })
                }
            }
        }])
})(angular)