// "use strict";

angular.module('app')
  .controller('logoutCtrl', function (AuthFactory, $location) {
    AuthFactory.userLogout()
      .then(() => $location.path('/login'))
      .catch(() => $location.path('/login'));
  });
