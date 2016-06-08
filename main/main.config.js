"use strict";

angular.module('app')
  .config(($routeProvider) => (
    $routeProvider
      .otherwise('/')
  ));