/**
 * Created by guoxiangwen on 2015/6/13.
 */
angular.module('student')

    .factory("student", ["$http", function ($http) {
        return {
            //list
            list:function(){
                return $http.get('/api/v1/student');
            }
        }
    }]);