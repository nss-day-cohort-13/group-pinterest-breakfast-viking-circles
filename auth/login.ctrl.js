"use strict";

angular.module('app')
  .controller('loginCtrl', function ($location, AuthFactory) {
    const auth = this;

    auth.userLogin = function () {
      AuthFactory.userLogin(auth.user.email, auth.user.password)
        .then(() => $location.path('/boards'))
        .catch(() => alert('Login Failed'));
    };
  });
