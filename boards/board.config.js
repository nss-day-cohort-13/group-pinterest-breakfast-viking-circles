"use strict";

angular.module('app')
  .config(($routeProvider) => (
    $routeProvider
      .when('/boards', {
        controller: 'BoardCtrl',
        controllerAs: 'board',
        templateUrl: 'boards/index.html',
      })
      .when('/boards/newBoard', {
        controller: 'NewBoardCtrl',
        controllerAs: 'board',
        templateUrl: 'boards/newBoard.html',
      })
      .when('/boards/newPin', {
        controller: 'NewBoardCtrl',
        controllerAs: 'board',
        templateUrl: 'boards/newPin.html',
      })
      // .when('/boards/:id/edit', {
      //   controller: 'EditBoardCtrl',
      //   controllerAs: 'board',
      //   templateUrl: 'boards/form.html',
      // })
    )
  );