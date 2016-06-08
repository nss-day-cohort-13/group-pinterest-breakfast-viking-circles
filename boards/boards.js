angular.module('app')
  .config(($routeProvider) => (
    $routeProvider
      .when('/boards', {
        controller: 'boardsCtrl',
        controllerAs: 'boards',
        templateUrl: 'boards/boards.html',
      })
  ))
  .controller('boardsCtrl', function () {
    const boards = this
  })


