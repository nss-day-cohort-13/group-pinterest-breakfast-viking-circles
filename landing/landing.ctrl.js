"use strict";

angular.module('app')
  .controller('LandingCtrl', function (LandingFactory) {
    const landing = this;

    LandingFactory.all().then(list => {
      landing.list = list.app.pins;
    });

    landing.delete = (index) => {
      LandingFactory.delete(index);

      landing.list = [
        ...landing.list.slice(0, index),
        ...landing.list.slice(index + 1)
      ];
    };
  });