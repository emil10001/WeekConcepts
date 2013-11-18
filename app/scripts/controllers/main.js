'use strict';

myApp.controller('MainCtrl', function ($scope, $rootScope, Constants, ProjectService, UsersService, MyProfileService) {
    $scope.projects = {};
    $scope.users = {};
    $scope.user = {};

    $scope.$on(Constants.UPDATE_PROJECTS, function (event, data) {
        console.log('updating projects', data);
        $scope.projects = data;
    });
    $scope.$on(Constants.UPDATE_USERS, function (event, data) {
        console.log('updating users', data);
        $scope.users = data;
        $scope.user = UsersService.getUser(0);
    });

    $scope.getMiniUrl = function (proj) {
        if (!proj)
            return "";
        return "mini/" + proj.id;
    };
    $scope.getProjectUrl = function (proj) {
        if (!proj)
            return "";
        return "#/project/" + proj.id;
    };

    $rootScope.$broadcast(Constants.INIT_LOAD);

});
