"use strict";

console.log("main.config");
angular.module('app')
  .config(($routeProvider) => (
    $routeProvider
      .otherwise('/')
  ));