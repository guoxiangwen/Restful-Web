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