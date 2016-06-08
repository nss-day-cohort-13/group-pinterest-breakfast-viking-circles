// "use strict";

angular.module('app')
  .controller('logoutCtrl', function (AuthFactory, $location) {
    AuthFactory.userLogout()
  });
