/**
 * Created by guoxiangwen on 2015/6/24.
 */
angular.module('index')
    .controller('IndexController',
    ['$scope', 'StudentService', 'CurseService',
        function ($scope, StudentService, CurseService) {
            /*初始化学生，课程对象模型*/
            var stu_vm = $scope.stu_vm = {
                //list 模型
                students: {},
                //add student模型
                add_Modal: {},
                //edit student 模型
                edit_Modal: {}
            };
            var cur_vm = $scope.cur_vm = {};
            /*初始化学生，课程的操作对象容器*/
            /*获取选中的学生_ids*/
            var ids = [];
            var studentFn = $scope.studentFn = {
                list: function () {
                    StudentService.list().then(function (data) {
                        stu_vm.students = data.data;
                    }, function (err) {
                        alert(err);
                    })
                },
                add: function () {
                    var self = this;
                    StudentService.add(stu_vm.add_Modal).then(function (data) {
                        alert("added" + data);
                        angular.element("#addStu").modal('hide');
                        self.list();
                    }, function (err) {
                        alert(err);
                    })
                },
                put: function () {
                },
                remove: function () {
                    $("#stu_tb input[type=checkbox]:checked").each(function (index, el) {
                        ids.push(el.value);
                    });
                    var self = this;
                    StudentService.remove(ids).then(function (data) {
                        alert("delete success" + data);
                        self.list();
                    }, function (err) {
                        alert(err);
                    });
                    alert(ids)
                }
            };
            studentFn.list();
            /*课程*/
            var curse = {
                list: function () {
                    CurseService.list().then(function (data) {
                        cur_vm.curses = data.data;
                    }, function (err) {

                    })
                }
            };
            curse.list();
        }]);