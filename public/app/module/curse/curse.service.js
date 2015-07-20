/**
 * Created by guoxiangwen on 2015/7/14.
 */
angular.module('curse')
    .factory("CurseService", ["$http", function ($http) {
        return {
            //list
            list:function(){
                return $http.get('/api/v1/curse');
            }
        }
    }]);