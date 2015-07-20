/**
 * Created by guoxiangwen on 2015/6/24.
 */
angular.module('student')
    .controller("StuController", ['$scope', 'StudentService', function ($scope, StudentService) {
        var vm = $scope.vm = {};
        $scope.list = function () {
            StudentService.list().then(function (data) {
                console.dir(data);
                vm.students = data.data;
            }, function (err) {

            })
        };
        $scope.list();
    }]);