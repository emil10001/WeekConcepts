"use strict";

myService.service('UsersService', function ($rootScope, $http, Constants) {
        this.users = {};
        var self = this;

        $rootScope.$on(Constants.INIT_LOAD, function () {
            $http.get('scripts/data/users.json')
                .success(function (data, status, headers, config) {
                    self.users = data;
                    console.log('emitting users');
                    $rootScope.$broadcast(Constants.UPDATE_USERS, self.users);
                });
        });

        return this;
    }
);