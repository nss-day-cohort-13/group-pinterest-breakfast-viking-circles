"use strict";

angular.module('app')
  .factory('BoardFactory', ($timeout) => {


  return {
    getUsers() {
        $http.get('https://grouppinterestclone.firebaseio.com/.json')
        .then(function(resp) {
          console.log("resp", resp);
          const userzAray = []
          let userz = resp.data;
            for ( let user in $scope.userz) {
          $scope.userzArray.push($scope.userz[user]);
          console.log(userz)
        }
    }{
      "app":
      {
        "users": [
          {
            "uid": "github:jruhfiurnvuienciuwdn",
            "name": "Abraham Ybrimovitz"
          }
        ],
        "pins" : [
          {
            "uid": "github:jruasdvusaffsfiuwdn",
            "boardid": "Stupid animals",
            "url": "http://trapperran.yolasite.com/resources/mp_black_bear.jpg",
            "title": "Ha ha, stupid bear"
          },
          {
            "uid": "github:jruasdvusaffsfiuwdn",
            "boardid": "Stupid animals",
            "url": "http://www.underwatertimes.com/news2/justin_gator_lufkin_texas.jpg",
            "title": "Ha ha, stupid gator"
          },
          {
            "uid": "github:jruasdvusaffsfiuwdn",
            "boardid": "Stupid animals",
            "url": "http://www.stupid.com/assets/images/graphics/00000001/horsemask1.jpg",
            "title": "Ha ha, stupid horse"
          }
        ],
        "boards" : [
          {
            "uid": "github:jruasdvusaffsfiuwdn",
            "title": "Stupid animals"
          },
          {
            "uid": "github:zzzzzzzzzzzzzzzzzzz",
            "title": "Men with hats"
          },
          {
            "uid": "github:aaaaaaaaaaaaaaaaaaaa",
            "title": "Animals on wheels"
          }
        ]
      }
    };
    // let pins = [
    //   {
    //     uid: "github:jruasdvusaffsfiuwdn",
    //     boardid: "-K66hzzzyyyy",
    //     url: "http://www.imgur.com/9rufrniuvnfu2vnefui",
    //     title: "Ha ha, stupid bear"
    //   },
    //   {
    //     uid: "github:jruasdvusaffsfiuwdn",
    //     boardid: "-K66hzzzyyyy",
    //     url: "http://www.imgur.com/9rufrniuvnfu2vnefui",
    //     title: "Ha ha, stupid gator"
    //   },
    //   {
    //     uid: "github:jruasdvusaffsfiuwdn",
    //     boardid: "-K66hzzzyyyy",
    //     url: "http://www.imgur.com/9rufrniuvnfu2vnefui",
    //     title: "Ha ha, stupid horse"
    //   }
    // ];

    // let boards = [
    //   {
    //     uid: "github:jruasdvusaffsfiuwdn",
    //     title: "Stupid animals"
    //   },
    //   {
    //     uid: "github:zzzzzzzzzzzzzzzzzzz",
    //     title: "Men with hats"
    //   },
    //   {
    //     uid: "github:aaaaaaaaaaaaaaaaaaaa",
    //     title: "Animals on wheels"
    //   }
    // ];

    return {
      all () {
        return $timeout().then(() => boards);
        // .then(console.log("boards =", boards));
      },

      get (id) {
        // timeout = 0 means callback ASAP but still async
        return $timeout().then(() => boards[id]);
      },

      pinCreate (board) {
        boards.app.pins.push(board);
      },

      boardCreate (board) {
        boards.app.boards.push(board);
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

