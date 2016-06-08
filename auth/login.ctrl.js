"use strict";

angular.module('app')
  .controller('loginCtrl', function ($location, AuthFactory) {
    const auth = this;

    auth.login = function () {
      console.log("auth", auth.login);
      AuthFactory.userLogin(auth.user.email, auth.user.password)

    auth.Register = function() {
        $location.url('http://localhost:8080/#/register');
   }
    };
  });
