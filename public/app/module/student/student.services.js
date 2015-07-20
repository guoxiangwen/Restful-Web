/**
 * Created by guoxiangwen on 2015/6/13.
 */
angular.module('student')

    .factory("StudentService", ["$http", function ($http) {
        return {
            //list
            list: function () {
                return $http.get('/api/v1/student');
            },
            //add
            add: function (student) {
                return $http.post('/api/v1/student', student);
            },
            //put
            update: function (_id, student) {
                return $http.put('/api/v1/student', {_id: _id, student: student})
            },
            //delete
            remove: function (_id) {
                return $http.delete('/api/v1/student/' + _id);
            }
        }
    }]);