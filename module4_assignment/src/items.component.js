// JavaScript for Module 4 Assignment
// Course: Single Page Web Apps with AngularJS (Coursera)
// Instructor: Yaakov Chaikin
//
// Written by: Jason Costabile

(function() {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/templates/items.template.html',
    bindings: {
      items: '<'
    }
  });
})();
