"use strict";

myUtils.factory('Constants', function () {
    function Constants(){
    }
    Constants.UPDATE_PROJECTS = 'updating_projects';
    Constants.UPDATE_USERS = 'updating_users';
    Constants.UPDATE_ME = 'updating_me';
    Constants.INIT_LOAD = 'init_load';
    Constants.INIT_ME = 'init_me';
    Constants.INIT_PROJECT = 'init_project';
    Constants.INIT_USER = 'init_user';

    return Constants;
});