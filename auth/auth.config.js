"use strict";

angular.module('app')
  .config(($routeProvider) => {
    $routeProvider
      .when('/login', {
        controller: 'loginCtrl',
        controllerAs: 'auth',
        templateUrl: '/auth/login.html'
      })
      .when('/register', {
        controller: 'registerCtrl',
        controllerAs: 'auth',
        templateUrl: '/auth/register.html'
      })
      .when('/logout', {
        controller: 'logoutCtrl',
        controllerAs: 'auth',
        template: ''
      })
    })


