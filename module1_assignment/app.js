// JavaScript for Module 1 Assignment
// Course: Single Page Web Apps with AngularJS (Coursera)
// Instructor: Yaakov Chaikin
//
// Written by: Jason Costabile

(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.lunchMsg = "";
    $scope.feedbackColor = "";

    $scope.checkLunch = function() {
      if ($scope.lunchItems == "") {
        $scope.lunchMsg = "Please enter data first."
        $scope.feedbackColor = "red";
      } else {
        var items = $scope.lunchItems.split(",");
        var count = 0;

        for (var i in items) {
          if (items[i].trim() != "") {
            ++count;
          }
        }

        if (count <= 3) {
          $scope.lunchMsg = "Enjoy!";
        } else {
          $scope.lunchMsg = "Too much!"
        }
        $scope.feedbackColor = "green";

      }
    }
  };
})();
