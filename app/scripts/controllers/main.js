'use strict';

myApp.controller('MainCtrl', function ($scope, $rootScope, Constants, ProjectService, UsersService) {
    $scope.projects = {};
    $scope.users = {};

    $scope.$on(Constants.UPDATE_PROJECTS, function (event, data) {
        console.log('updating projects', data);
        $scope.projects = data;
    });
    $scope.$on(Constants.UPDATE_USERS, function (event, data) {
        console.log('updating users', data);
        $scope.users = data;
    });

    $rootScope.$broadcast(Constants.INIT_LOAD);

    $scope.getMiniUrl = function (proj) {
        if (!proj)
            return "";
        return "mini/" + proj.id;
    }
});
