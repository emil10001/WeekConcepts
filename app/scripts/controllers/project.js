/**
 * Created by ejf3 on 11/14/13.
 */
myApp.controller('ProjectCtrl', function ($scope, $rootScope, $routeParams, Constants, ProjectService, UsersService) {
    $scope.projectId = $routeParams.projectId;
    $scope.project = ProjectService.getProject($scope.projectId);

    $scope.$on(Constants.UPDATE_PROJECTS, function () {
        console.log('updating project');
        $scope.project = ProjectService.getProject($scope.projectId);
    });

    (function () {
        if (!!$scope.project)
            return;
        $rootScope.$broadcast(Constants.INIT_LOAD);
    })();
});