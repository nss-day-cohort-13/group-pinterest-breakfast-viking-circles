"use strict";

angular.module('app')
  .controller('NewBoardCtrl', function (BoardFactory, $location) {
    const board = this;

    board.submit = () => {
      BoardFactory.create(board);
      $location.path('/boards/');
    };
  });