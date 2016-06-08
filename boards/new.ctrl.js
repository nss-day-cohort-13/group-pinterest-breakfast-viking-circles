"use strict";

angular.module('app')
  .controller('NewAddressCtrl', function (AddressFactory, $location) {
    const address = this;

    address.submit = () => {
      AddressFactory.create(address.person);
      $location.path('/addresses');
    };
  });