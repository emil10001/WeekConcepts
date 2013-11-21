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

    Constants.GET_USERS = 'get_users';
    Constants.GET_PROJECTS = 'get_projects';
    Constants.GET_ORGS = 'get_orgs';
    Constants.GET_META = 'get_meta';
    Constants.GET_PRIVATE = 'get_private';
    Constants.UPDATE_USER = 'update_user';
    Constants.UPDATE_PROJECT = 'update_project';
    Constants.USERS_TABLE = 'weekconcepts_users';
    Constants.PROJECTS_TABLE = 'weekconcepts_projects';
    Constants.ORGS_TABLE = 'weekconcepts_orgs';
    Constants.META_TABLE = 'weekconcepts_meta';

    return Constants;
});