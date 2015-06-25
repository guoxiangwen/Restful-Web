/**
 * LoginService
 */
app.factory('login', ['$http', function ($http) {
    return {
        login: function (name, pwd) {
            return $http.post('/login', {name: name, pwd: pwd});
        }
    };
}]);