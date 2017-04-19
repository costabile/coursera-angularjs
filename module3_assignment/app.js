// JavaScript for Module 3 Assignment
// Course: Single Page Web Apps with AngularJS (Coursera)
// Instructor: Yaakov Chaikin
//
// Written by: Jason Costabile

(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var vm = this;

    vm.searchTerm = "";
    vm.found = [];
    vm.emptySearch = false;

    vm.search = function() {
      var promise = MenuSearchService.getMatchedMenuItems(vm.searchTerm);
      promise.then(function(response) {
        vm.found = response;
        vm.emptySearch = vm.found.length === 0;
      });
    }

    vm.removeItem = function(index) {
      vm.found.splice(index, 1);
    }
  }

  MenuSearchService.$inject = ["$http"]
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function(response) {
        var foundItems = [];

        // return empty list if search term is empty
        if (searchTerm) {
          var term = searchTerm.toLowerCase();

          for (var item in response.data.menu_items) {
            if (response.data.menu_items[item].description.toLowerCase().indexOf(term) !== -1) {
              foundItems.push(response.data.menu_items[item]);
            }
          }
        }

        return foundItems;
      }, function (error) {
        console.log("MenuSearchService error: ", error);
      });
    }
  }

  function FoundItems() {
    var ddo = {
      templateUrl: './found-items.html',
      scope: {
        found: '<itemList',
        onRemove: '&'
      }
    };

    return ddo;
  }
})();
