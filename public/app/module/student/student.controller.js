/**
 * Created by guoxiangwen on 2015/6/24.
 */
angular.module('student')
    .controller("StuController", ['$scope', 'student', function ($scope, student) {
        var vm = $scope.vm = {};
        $scope.list = function () {
            student.list().then(function (data) {
                console.dir(data);
                vm.students = data.data;
            }, function (err) {

            })
        };
        $scope.list();
    }]);