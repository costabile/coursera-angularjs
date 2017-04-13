// JavaScript for Module 2 Assignment
// Course: Single Page Web Apps with AngularJS (Coursera)
// Instructor: Yaakov Chaikin
//
// Written by: Jason Costabile

(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.getToBuyItems();

    this.buyItem = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [];
    var alreadyBoughtItems = [];

    // create default items
    var defaultItems = ["tub of yogurt", "cookies", "carrots", "bars of cheese", "ice cream cakes", "jars of almonds", "boxes of cereal"];
    var quant = 1;
    for (var i in defaultItems) {
      var item = { name: defaultItems[i], quantity: quant++ };
      toBuyItems.push(item);
    }

    service.getToBuyItems = function () {
      return toBuyItems;
    }

    service.getAlreadyBoughtItems = function () {
      return alreadyBoughtItems;
    }

    service.buyItem = function(index) {
      var item = (toBuyItems.splice(index, 1))[0];
      alreadyBoughtItems.push(item);
    }
  }
})();
