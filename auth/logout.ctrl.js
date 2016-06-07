"use strict";

console.log("logout.ctrl");

angular.module('app')
  .controller('LogoutCtrl', function (AuthFactory, $location) {
    AuthFactory.logout()
      .then(() => $location.path('/login'))
      .catch(() => $location.path('/login'));
  });
