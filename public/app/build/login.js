/**
 * Created by guoxiangwen on 2015/6/24.
 */

/**
 * 登录模块的入口文件,主要编写app模块启动时候的配置项
 * 例如:app.run app.config
 *
 */
var app = angular.module('login', []);


/**
 * loginController
 */
angular.module('login').controller('LoginController',
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
/**
 * LoginService
 */
angular.module('login').factory('login', ['$http', function ($http) {
    return {
        login: function (name, pwd) {
            return $http.post('/login', {name: name, pwd: pwd});
        }
    };
}]);
