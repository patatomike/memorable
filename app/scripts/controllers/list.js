'use strict';

/**
 * @ngdoc function
 * @name memorableAppApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the memorableAppApp
 */
angular.module('memorableAppApp')
  .controller('ListCtrl', function ($scope, $http) {

    $http.get('Row1data.json').success (function(data){
      // console.log(data);

      $scope.items = getObjects(data ,'establishement_type','Food');

      // console.log(getObjects(data ,'establishement_type','Coffee')); //retrieve all POI by establishement_type
    });

    $scope.typesList={
      availableOptions: [
        {id:1,name:"EAT"},{id:2,name:"DRINK"},{id:3,name:"SHOP"},{id:4,name:"HAVE A COFFEE"}
      ],
      selectedOption:
        {id: 1, name: "EAT"} //This sets the default value of the select in the ui
      };

    $scope.changedValue=function(item){
      $http.get('Row1data.json').success (function(data){
        switch (item.id) {
          case 1:
            $scope.items = getObjects(data ,'establishement_type','Food');
            break;
          case 2:
            $scope.items = getObjects(data ,'establishement_type','bar');
            break;
          case 3:
            $scope.items = getObjects(data ,'establishement_type','Shop');
            break;
          case 4:
            $scope.items = getObjects(data ,'establishement_type','Coffee');
            break;
          default:
            $scope.items = data;
        }
      });
    }

  });
