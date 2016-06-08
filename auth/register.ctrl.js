"use strict";

angular.module('app')
  .controller('registerCtrl', function ($location, AuthFactory){
    const auth = this;

    auth.userCreate = function () {
      AuthFactory.userCreate(auth.user.email, auth.user.password)
        .then(() => $location.path('/boards'))
        .catch(() => alert('Login Failed'));
    };
  });
