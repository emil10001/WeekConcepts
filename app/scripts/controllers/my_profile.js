/**
 * Created by ejf3 on 11/17/13.
 */
"use strict";

myApp.controller('MyProfileCtrl', function ($scope, $rootScope, $routeParams, Constants, ProjectService, UsersService, MyProfileService) {
    $scope.me = MyProfileService.me;

    $scope.$on(Constants.UPDATE_ME, function (event, data) {
        console.log('updating me', $scope.me);
        $scope.me = data;
    });

    $scope.getMyProfileUrl = function () {
        if (!$scope.me)
            return "";
        return "#/profile/" + $scope.me.id;
    };

    (function () {
        if (!!$scope.me) {
            $scope.me = MyProfileService.me;
            if (!!$scope.me)
                return;
        }

        $rootScope.$broadcast(Constants.INIT_ME);
    })();
});