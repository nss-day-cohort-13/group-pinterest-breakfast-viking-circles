"use strict" ;

console.log("auth.factory");

angular.module('app')
  .factory('AuthFactory', ($timeout) => {
    const users = {
      'a@b.com': '123',
      'b@c.com': '123'
    };

    let currentUser = null;

    return {
      login (email, password) {
        return $timeout().then(() => (
          users[email] === password
            ? Promise.resolve(currentUser = email)
            : Promise.reject('Authentication Failed')
        ));
      },

      logout () {
        return $timeout().then(() => (
          currentUser = null
        ));
      },

      getUser () {
        return currentUser;
      }
    };
  });
