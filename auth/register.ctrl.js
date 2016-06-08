"use strict";

angular.module('app')
  .controller('registerCtrl', function ($location, AuthFactory){
    const auth = this;

    auth.register = function () {
      console.log("reg",auth.register);
      AuthFactory.userCreate(auth.user.email, auth.user.password)
    };
  });
