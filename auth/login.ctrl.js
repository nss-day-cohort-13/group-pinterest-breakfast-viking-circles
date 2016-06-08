"use strict";

angular.module('app')
  .controller('loginCtrl', function ($location, AuthFactory) {
    const auth = this;

    auth.login = function () {
      console.log("auth", auth.login);
      AuthFactory.userLogin(auth.user.email, auth.user.password)
    };
  });
