"use strict";

angular.module('app')
  .controller('NewBoardCtrl', function (BoardFactory, $location) {
    const board = this;

    board.submit = () => {
      console.log("submit fired");
      BoardFactory.create(board.entry);
      $location.path('/boards/');
    };
  });