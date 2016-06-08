"use strict";

angular.module('app')
  .config(($routeProvider) => (
    $routeProvider
      .when('/', {
        templateUrl: '/landing/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing',
      })
  ));