/**
 * Created by ejf3 on 11/14/13.
 */
"use strict";

myApp.controller('ProfileCtrl', function ($scope, $rootScope, $routeParams, Constants, UsersService) {
    $scope.profileId = $routeParams.profileId;
    $scope.user = UsersService.getUser($scope.profileId);
    console.log('user id: ', $scope.profileId);

    $scope.$on(Constants.UPDATE_USERS, function (event, data) {
        console.log('updating users');
        $scope.user = UsersService.getUser($scope.profileId);

        console.log('getUser', $scope.user);
    });

    (function () {
        if (!!$scope.user && $scope.user !== {} && $scope.user !== undefined)
            return;

        $rootScope.$broadcast(Constants.INIT_USER);
    })();
});