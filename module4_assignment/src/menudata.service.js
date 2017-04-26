// JavaScript for Module 4 Assignment
// Course: Single Page Web Apps with AngularJS (Coursera)
// Instructor: Yaakov Chaikin
//
// Written by: Jason Costabile

(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function() {
      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
      }).then(function(response) {
        return response.data;
      });
    };

    service.getItemsForCategory = function(categoryShortName) {
      var url = "https://davids-restaurant.herokuapp.com/menu_items.json?category="+ categoryShortName;
      return $http({
        method: "GET",
        url: url
      }).then(function(response) {
        return response.data;
      });
    };
  }
})();
