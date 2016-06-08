"use strict";

angular.module('app')

.factory('AuthFactory', (function($http) {
  return {
    getUsers() {
        return $http.get('https://grouppinterestclone.firebaseio.com/users/.json')
        .then(function(resp) {
          console.log("resp", resp);
          // const userzAray = []
          let userz = resp.data;
          //   for ( let user in $scope.userz) {
          // $scope.userzArray.push($scope.userz[user]);
          console.log(userz)
        }
      )
    },

    userCreate(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }); //create user
  }
    userLogin(email, password) {
      return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      }); //sign in
    }
    userLogout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened. //logout
    })
  }
  }
}))
