/**
 * Created by ejf3 on 11/14/13.
 */
"use strict";

myApp.controller('ProfileCtrl', function ($scope, $rootScope, $routeParams, Constants, ProjectService, UsersService) {
    $scope.profileId = $routeParams.profileId;
    $scope.user = UsersService.getUser($scope.profileId);

    $scope.$on(Constants.UPDATE_USERS, function (event, data) {
        console.log('updating users');
        if (!!$scope.user)
            $scope.user = UsersService.getUser($scope.project.uid);

        console.log('getUser', $scope.user);
    });

    (function () {
        if (!!$scope.user) {
            $scope.user = UsersService.getUser($scope.user.id);
            if (!!$scope.user)
                return;
        }

        $rootScope.$broadcast(Constants.INIT_USER);
    })();
});