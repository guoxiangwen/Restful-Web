/**
 * loginController
 */
app.controller('LoginController',
    ['$scope', 'login', '$window', function ($scope, login, $window) {
        var vm = $scope.vm = {};
        $scope.login = function () {
            login.login(vm.name, vm.pwd).then(function (data) {
                alert("登录成功");
                $window.location = '/';
            }, function (err) {
                alert(err.data.msg);
            });
        };
    }]);