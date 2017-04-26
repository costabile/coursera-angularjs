// JavaScript for Module 4 Assignment
// Course: Single Page Web Apps with AngularJS (Coursera)
// Instructor: Yaakov Chaikin
//
// Written by: Jason Costabile

(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var ctrl = this;
    ctrl.items = items;
    console.log(items);
  }
})();
