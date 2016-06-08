"use strict";

angular.module('app')
  .controller('NewBoardCtrl', function (BoardFactory, $location) {
    const board = this;

    board.submit = function () {
      // if this is a board creation
      if (board.url === undefined) {
          console.log("This should be a board");
          BoardFactory.boardCreate(board);
          $location.path('/boards');
      // if this is a pin creation
      } else { 
          console.log("this should be a pin");
          BoardFactory.pinCreate(board);
          $location.path('/boards/');
      }
    };
  });