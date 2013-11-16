'use strict';

var myUtils = angular.module('weekConcepts.utils', [
]);
var myService = angular.module('weekConcepts.services', [
    'weekConcepts.utils',
    'ngResource'
]);
var myApp = angular.module('weekConceptsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'weekConcepts.services',
    'weekConcepts.utils'
]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/mini/:projectId', {
            templateUrl: 'views/partials/miniproject.html',
            controller: 'ProjectCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
