"use strict";

angular.module('app')
  .controller('NewBoardCtrl', function (BoardFactory, $location) {
    const board = this;

    board.submit = () => {
    	console.log("board =", board);
    	// if this is a board creation
    	if (board.url === "undefined") {
    		BoardFactory.boardCreate(board)
    		$location.path('/boards');
    	// if this is a pin creation
    	} else { 
    		BoardFactory.pinCreate(board);
    		$location.path('/boards/');
    	}
    };
  });