'use strict';

var myUtils = angular.module('weekConcepts.utils', [
]);
var myService = angular.module('weekConcepts.services', [
    'weekConcepts.utils',
    'btford.socket-io',
    'ngResource'
]);
var myApp = angular.module('weekConceptsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'weekConcepts.services',
    'btford.socket-io',
    'weekConcepts.utils'
]);

myApp.config(function ($routeProvider, socketProvider) {
//    var mySocket = io.connect('127.0.0.1:8065');
//    socketProvider.ioSocket(mySocket);

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/mini/:projectId', {
            templateUrl: 'views/partials/miniproject.html',
            controller: 'ProjectCtrl'
        })
        .when('/project/:projectId', {
            templateUrl: 'views/project.html',
            controller: 'ProjectCtrl'
        })
        .when('/profile/:profileId', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl'
        })
        .when('/add_edit_project', {
            templateUrl: 'views/add_edit_project.html',
            controller: 'ProfileCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
