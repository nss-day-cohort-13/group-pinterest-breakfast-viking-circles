"use strict";

angular.module('app')
  .factory('LandingFactory', ($timeout) => {

    let boards = {
      "app":
      {
        "users": [
          {
            "uid": "github:jruhfiurnvuienciuwdn",
            "name": "Jenny Gem"
          }
        ],
        "pins" : [
          {
            "uid": "github:jruasdvusaffsfiuwdn",
            "boardid": "Cookies",
            "src": "img/meltedSnowmen.jpg",
            "title": "Melting Snowmen"
          },
          {
            "uid": "github:jruasdvusaffsfiuwdn",
            "boardid": "Cookies",
            "src": "img/buttonCookies.jpg",
            "title": "Button Cookies"
          },
          {
            "uid": "github:jruasdvusaffsfiuwdn",
            "boardid": "Cookies",
            "src": "img/vwCookie.jpg",
            "title": "VW Cookie"
          },
          {
            "uid": "github:jruasdvusaffsfiuwdn",
            "boardid": "Cookies",
            "src": "img/meltedSnowmen.jpg",
            "title": "Melting Snowmen"
          },
          {
            "uid": "github:jruasdvusaffsfiuwdn",
            "boardid": "Cookies",
            "src": "img/buttonCookies.jpg",
            "title": "Button Cookies"
          },
          {
            "uid": "github:jruasdvusaffsfiuwdn",
            "boardid": "Cookies",
            "src": "img/vwCookie.jpg",
            "title": "VW Cookie"
          }
        ],
        "boards" : [
          {
            "uid": "github:jruasdvusaffsfiuwdn",
            "title": "Cookies"
          },
          {
            "uid": "github:zzzzzzzzzzzzzzzzzzz",
            "title": "Cats"
          },
          {
            "uid": "github:aaaaaaaaaaaaaaaaaaaa",
            "title": "Caramel"
          }
        ]
      }
    };

    return {
      all () {
        return $timeout().then(() => boards);
        // .then(console.log("boards =", boards));
      },

      get (id) {
        // timeout = 0 means callback ASAP but still async
        return $timeout().then(() => boards[id]);
      },

      create (board) {
        boards.push(board);
      },

      update (index, board) {
        // id when passed by $routeParams is a string
        // thus: string + 1 === `${string}1`
        // prefer unary plus operator: +string + 1 === Number(string) + 1

        boards = [
          ...boards.slice(0, index),
          board,
          ...boards.slice(+index + 1),
        ];
      },

      delete (index) {
        boards = [
          ...boards.slice(0, index),
          ...boards.slice(index + 1),
        ];
      }
    };
  });

