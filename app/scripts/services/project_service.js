"use strict";

myService.service('ProjectService', function ($rootScope, $http, Constants) {
        this.projectsById = {};
        this.projects = {};
        var self = this;

        var load = function () {
            $http.get('scripts/data/projects.json')
                .success(function (data, status, headers, config) {
                    self.projects = data;
                    self.projectsById = {};
                    for (var i = 0; i < data.length; i++) {
                        var key = data[i].id;
                        self.projectsById[key] = data[i];
                    }
                    console.log('emitting projects');
                    $rootScope.$broadcast(Constants.UPDATE_PROJECTS, self.projects);
                });
        };

        this.getProject = function (id) {
            if (!this.projectsById || this.projectsById === {})
                return null;
            return this.projectsById[id];
        };

        $rootScope.$on(Constants.INIT_LOAD, load);
        $rootScope.$on(Constants.INIT_PROJECT, load);

        return this;
    }
)
;
