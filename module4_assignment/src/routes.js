// JavaScript for Module 4 Assignment
// Course: Single Page Web Apps with AngularJS (Coursera)
// Instructor: Yaakov Chaikin
//
// Written by: Jason Costabile

(function() {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    // Home Page
    .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'
      }
    )

    // Categories view
    .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/categories.template.html',
        controller: 'CategoriesController as ctrl',
        resolve: {
          categories: ['MenuDataService',
                  function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                  }]
        }
      }
    )

    // Items view
    .state('items', {
        url: '/items/{catId}',
        templateUrl: 'src/templates/items.template.html',
        controller: 'ItemsController as ctrl',
        params: {
          catId: null
        },
        resolve: {
          items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.catId);
              }]
        }
    });

  }
})();
