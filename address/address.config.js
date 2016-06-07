"use strict";

console.log("address.config");
angular.module('app')
  .config(($routeProvider) => (
    $routeProvider
      .when('/addresses', {
        controller: 'AddressCtrl',
        controllerAs: 'address',
        templateUrl: 'address/index.html',
      })
      .when('/addresses/new', {
        controller: 'NewAddressCtrl',
        controllerAs: 'address',
        templateUrl: 'address/form.html',
      })
      .when('/addresses/:id/edit', {
        controller: 'EditAddressCtrl',
        controllerAs: 'address',
        templateUrl: 'address/form.html',
      })
    )
  );