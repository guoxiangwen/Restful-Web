/**
 *Created by gxw on 2015/1/21 0021.
 *@author gxw
 *@version v1.0
 */
'use strict';
var app = angular.module('index', [
    'ui.router',
    'ui.bootstrap',
    'student',
    'curse'
]);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
app.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        /*====================================修改密码===================================*/

        .state('changePass', {
            url: '/changePass',
            templateUrl: 'app/views/template/user/changePass.html'
        })

        /*====================================主页默认===================================*/

        .state('/', {
            url: '/',
            templateUrl: 'app/views/template/index.html'
        })

        /*====================================学生===================================*/

        .state('student', {
            url: '/student',
            templateUrl: 'app/views/template/student/student.html',
            controller: 'StuController'
        })
        /*====================================课程===================================*/
        .state('curse', {
            url: '/curse',
            templateUrl: 'app/views/template/curse/curse.html',
            controller: 'CurseController'
        })

        /*====================================系统--管家管理===================================*/

        .state('system-mange', {
            url: '/system-mange',
            templateUrl: 'app/views/template/system/manager-mange.html',
            controller: 'SystemController'
        })

        /*====================================系统--操作日志===================================*/

        .state('system-log', {
            url: '/system-log',
            templateUrl: 'app/views/template/system/operation-log.html',
            controller: 'LogController'
        })

        /*====================================统计===================================*/

        .state('count', {
            url: '/count',
            templateUrl: 'app/views/template/count/count.html',
            controller: 'CountController'
        })
        /*====================================登出===================================*/
        .state('logout', {
            url: '/logout',
            controller: 'LogoutCtrl'
        });
});

