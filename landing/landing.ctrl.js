"use strict";

angular.module('app')
  .controller('LandingCtrl', function (LandingFactory) {
    const landing = this;

    // let list = BoardFactory.all();
    // console.log("list = ", list);

    LandingFactory.all().then(list => {
      landing.list = list.app.pins
      console.log("hey ryan", landing.list)
    }
    );

    landing.delete = (index) => {
      LandingFactory.delete(index);

      landing.list = [
        ...landing.list.slice(0, index),
        ...landing.list.slice(index + 1)
      ];
    };
  });