"use strict";

angular.module('app')
  .controller('EditAddressCtrl', function (BoardFactory, $routeParams, $location) {
    const address = this;
    const id = $routeParams.id;

    address.person = BoardFactory.get(id);

    address.submit = () => {
      BoardFactory.update(id, address.person);
      $location.path('/addresses');
    };
  });