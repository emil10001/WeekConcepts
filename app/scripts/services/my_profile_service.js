"use strict";

myService.service('MyProfileService', function ($rootScope, $http, Constants) {
        this.me = null;
        this.myId = 0;
        var self = this;

        var load = function () {
            if (!!self.me) {
                $rootScope.$broadcast(Constants.UPDATE_ME, self.me);
                return;
            }

            $http.get('scripts/data/users.json')
                .success(function (data, status, headers, config) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].id === self.myId)
                            self.me = data[i];
                    }
                    if (!self.me){
                        console.log('failed to find me');
                        return;
                    }
                    console.log('emitting me');
                    $rootScope.$broadcast(Constants.UPDATE_ME, self.me);
                });
        };

        $rootScope.$on(Constants.INIT_ME, load);

        return this;
    }
);