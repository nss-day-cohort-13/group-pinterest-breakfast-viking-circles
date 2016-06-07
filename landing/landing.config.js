"use strict";

console.log("landing.config");

angular.module('app')
  .config(($routeProvider) => (
    $routeProvider
      .when('/', {
        templateUrl: '/landing/landing.html',
      })
  ));