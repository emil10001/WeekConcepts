"use strict";

myService.service('ProjectService', function ($rootScope, $http, Constants) {
        this.projects = {};
        var self = this;

        $rootScope.$on(Constants.INIT_LOAD, function () {
            $http.get('scripts/data/projects.json')
                .success(function (data, status, headers, config) {
                    self.projects = data;
                    console.log('emitting projects');
                    $rootScope.$emit(Constants.UPDATE_PROJECTS, self.projects);
                });
        });

        return this;
    }
);
