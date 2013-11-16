'use strict';

myApp.controller('MainCtrl', function ($scope, $rootScope, Constants, ProjectService, UsersService) {
    $scope.projects = {};
    $scope.users = {};

    $rootScope.$on(Constants.UPDATE_PROJECTS, function (data) {
        console.log('updating projects');
        $scope.projects = data;
    });
    $rootScope.$on(Constants.UPDATE_USERS, function (data) {
        console.log('updating users');
        $scope.users = data;
    });

    $rootScope.$broadcast(Constants.INIT_LOAD);

    $scope.getMiniUrl = function (proj) {
        if (!proj)
            return "";
        return "mini/" + proj.id;
    }
});
