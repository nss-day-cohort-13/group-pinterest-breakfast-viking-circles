"use strict";

angular.module('app')
  .controller('BoardCtrl', function (BoardFactory) {
    const board = this;

    // BoardFactory.all().then(list =>
    //   board.list = list
    // );

    BoardFactory.all().then(function (list) {
      board.list = list;
      }
    );

    board.delete = function (index) {
      BoardFactory.delete(index);

      board.list = [
        ...board.list.slice(0, index),
        ...board.list.slice(index + 1)
      ];
    };
    
    // board.delete = (index) => {
    //   BoardFactory.delete(index);

    //   board.list = [
    //     ...board.list.slice(0, index),
    //     ...board.list.slice(index + 1)
    //   ];
    // };
  });