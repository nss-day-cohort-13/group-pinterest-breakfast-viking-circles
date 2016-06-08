"use strict";

angular.module('app')
  .config(($routeProvider) => (
    $routeProvider
      .when('/boards', {
        controller: 'BoardCtrl',
        // controllerAs: 'address',
        controllerAs: 'board',
        templateUrl: 'boards/index.html',
      })
      .when('/boards/new', {
        controller: 'NewBoardCtrl',
        controllerAs: 'board',
        templateUrl: 'boards/form.html',
      })
      .when('/boards/:id/edit', {
        controller: 'EditBoardCtrl',
        controllerAs: 'board',
        templateUrl: 'boards/form.html',
      })
    )
  );