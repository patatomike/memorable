'use strict';

/**
 * @ngdoc function
 * @name memorableAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memorableAppApp
 */
angular.module('memorableAppApp')
  .controller('MainCtrl', function ($scope, $http) {

    $http.get('Row1data.json').success (function(data){
      console.log(data);

      $scope.list = data;

    });

  });
