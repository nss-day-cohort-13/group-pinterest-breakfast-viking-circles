"use strict";

angular.module('app')
  .controller('BoardCtrl', function (BoardFactory) {
    const board = this;

    // let list = BoardFactory.all();
    // console.log("list = ", list);

    BoardFactory.all().then(list =>
      board.list = list
    );
    
    board.delete = (index) => {
      BoardFactory.delete(index);

      board.list = [
        ...board.list.slice(0, index),
        ...board.list.slice(index + 1)
      ];
    };
  });