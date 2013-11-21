/**
 * Created by ejf3 on 11/14/13.
 */
"use strict";

myApp.controller('ProjectCtrl', function ($scope, $rootScope, $routeParams, socket, Constants, ProjectService, UsersService, MyProfileService) {
    $scope.projectId = $routeParams.projectId;
    $scope.project = ProjectService.getProject($scope.projectId);
    $scope.user = {};


    $scope.$on(Constants.UPDATE_PROJECTS, function () {
        console.log('updating project');
        $scope.project = ProjectService.getProject($scope.projectId);
        $rootScope.$broadcast(Constants.INIT_USER);
    });
    $scope.$on(Constants.UPDATE_USERS, function (event, data) {
        console.log('updating users');
        if (!!$scope.project)
            $scope.user = UsersService.getUser($scope.project.uid);

        console.log('getUser', $scope.user);
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
    $scope.addEdit = function () {
        //FIXME - remove projectId field
        if (!MyProfileService.me || MyProfileService.me === {} || MyProfileService.me === undefined)
            return;
        $scope.project.uid = MyProfileService.me.id;
        socket.emit(Constants.UPDATE_PROJECT, $scope.project);
    };


    (function () {
        if (!!$scope.project) {
            $scope.user = UsersService.getUser($scope.project.uid);
            if (!!$scope.user)
                return;
        }

        $rootScope.$broadcast(Constants.INIT_PROJECT);
    })();
});