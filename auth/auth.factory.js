"use strict";

angular.module('app')

.factory('AuthFactory', (function($http) {

//   firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     alert("you have signed in successfully");// User is signed in.
//   } else {
//     alert("login failed");// No user is signed in.
//   }
// });

  return {
    getUsers() {
        $http.get('https://grouppinterestclone.firebaseio.com/users/.json')
        .then(function(resp) {
          console.log("resp", resp);
          // const userzAray = []
          let userz = resp.data;
          //   for ( let user in $scope.userz) {
          // $scope.userzArray.push($scope.userz[user]);
          console.log(userz);
        }
      )
    },

    userCreate(email, password) {
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      }); //create user
    },

    userLogin(email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage );
        // ...
      }); //sign in
    },

    userLogout() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }, function(error) {
        // An error happened. //logout
      });
    },
  }
}))
