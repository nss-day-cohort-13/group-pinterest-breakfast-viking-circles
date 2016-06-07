"use strict";

console.log("address.factory");

angular.module('app')
  .factory('AddressFactory', ($timeout) => {
    
    let list = [
       {
         name: "Zorm Kromax",
         phone: "615-555-5555",
         email: "jerm@zorbotz.gov",
         twitter: "sherm"
       },
       {
         name: "Hunar Krizz",
         phone: "615-555-5556",
         email: "zorpon@blorbon.gov",
         twitter: "ghastrom"
       },
       {
         name:"Twalt Grezzler",
         phone: "615-555-5336",
         email: "bloomo@krompom.gov",
         twitter: "tweltzer"
       }
     ];

    return {
      all () {
        // timeout = 1000 means callback after 1 second
        return $timeout(()=>{}, 1000).then(() => list);
      },

      get (id) {
        // timeout = 0 means callback ASAP but still async
        return $timeout().then(() => list[id]);
      },

      create (person) {
        list.push(person);
      },

      update (index, person) {
        // id when passed by $routeParams is a string
        // thus: string + 1 === `${string}1`
        // prefer unary plus operator: +string + 1 === Number(string) + 1

        list = [
          ...list.slice(0, index),
          person,
          ...list.slice(+index + 1),
        ];
      },

      delete (index) {
        list = [
          ...list.slice(0, index),
          ...list.slice(index + 1),
        ];
      }
    };
  });

