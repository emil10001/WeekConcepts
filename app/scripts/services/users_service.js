"use strict";

myService.service('UsersService', function ($rootScope, $http, Constants) {
        this.usersById = {};
        this.users = {};
        var self = this;

        var load = function () {
            $http.get('scripts/data/users.json')
                .success(function (data, status, headers, config) {
                    self.users = data;
                    self.usersById = {};
                    for (var i = 0; i < data.length; i++) {
                        var key = data[i].id;
                        self.usersById[key] = data[i];
                    }
                    console.log('emitting users');
                    $rootScope.$broadcast(Constants.UPDATE_USERS, self.users);
                });
        };

        this.getUser = function (id) {
            if (!this.usersById || this.usersById === {}) {
                console.log('usersById not filled in');
                return null;
            }
            return this.usersById[id];
        };

        $rootScope.$on(Constants.INIT_LOAD, load);
        $rootScope.$on(Constants.INIT_USER, load);

        return this;
    }
);