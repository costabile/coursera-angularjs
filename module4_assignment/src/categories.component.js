// JavaScript for Module 4 Assignment
// Course: Single Page Web Apps with AngularJS (Coursera)
// Instructor: Yaakov Chaikin
//
// Written by: Jason Costabile

(function() {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/templates/categories.template.html',
    bindings: {
      categories: '<'
    }
  });
})();
