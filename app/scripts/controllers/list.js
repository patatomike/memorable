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

    $(".filter").click(function() {
        $(".label").text($(this).text());
        updateList($(this).text());
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).delay(1000).offset().top
        }, 1000);
      });

    $(".modal-fullscreen").on('show.bs.modal', function () {
      setTimeout( function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
      }, 0);
    });
    $(".modal-fullscreen").on('hidden.bs.modal', function () {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    });

    $http.get('Row1data.json').success (function(data){
      // console.log(data);
      var categorieFromTime = getCategorieFromTime();
      var textCategorie = getCategorieText(categorieFromTime);
      $(".label").text(textCategorie);
      var obj = getObjects(data ,'establishement_type1', categorieFromTime);

      // $scope.items = obj;
      var lats = getValues(obj ,'establishement_lat');
      var longs = getValues(obj ,'establishement_long');
      $scope.lats = lats;
      $scope.longs = longs;
      $scope.items = obj;

      navigator.geolocation.getCurrentPosition(function(position) {
        var lat1 = position.coords.latitude;
        var lng1 = position.coords.longitude;

        var distances = [];
        // console.log(distance);
        $scope.$apply(function(){
          // $scope.distance = distance;
          $scope.lat = lats;
          $scope.lng = lng1;
          for (var i = 0 ; i < longs.length; i++) {
            distances[i]  = getDistanceBetween(lat1, lng1, $scope.lats[i], $scope.longs[i], 'K');
            obj[i].distance = distances[i];
          }
          obj.sort(function(a, b) {
              return parseFloat(a.distance) - parseFloat(b.distance);
          });
          $scope.items = obj;
          // $scope.distances = distances;
        });
      });

    });

    $scope.typesList={
      availableOptions: [
        {id:1,name:"EAT"},{id:2,name:"DRINK"},{id:3,name:"SHOP"},{id:4,name:"HAVE A COFFEE"}
      ],
      selectedOption:
        {id: 1, name: "EAT"} //This sets the default value of the select in the ui
      };

    $scope.getHomeScreenImage = function () {
      var categorieImage = getCategorieFromTime() +".jpg";
      return categorieImage;
    }

    $scope.getDistance = function (distance, item){
      if(isNaN(item.distance)){
        console.log("test");
        var centerlat = 45.501724;
        var centerlong = -73.567285;
        var distanceCenter = getDistanceBetween(centerlat, centerlong, item.establishement_lat, item.establishement_long, 'K');
        if(distanceCenter < 1){
          distanceCenter = distanceCenter * 1000;
          return distanceCenter + " m from city center";
        } else {
          return distanceCenter + " km from city center";
        }
      }
      if(distance < 1){
        distance = distance * 1000;
        return distance + " m";
      } else {
        return distance + " km";
      }


    };

    function updateList(item) {
      $http.get('Row1data.json').success (function(data){
        var obj;
        switch (item) {
          case "EAT":
            obj = getObjects(data ,'establishement_type1','Eat');
            $scope.items = obj;
            break;
          case "DRINK":
            obj = getObjects(data ,'establishement_type1','Drink');
            $scope.items = obj;
            break;
          case "SHOP":
            obj = getObjects(data ,'establishement_type1','Shop');
            $scope.items = obj;
            break;
          case "HAVE A COFFEE":
            obj = getObjects(data ,'establishement_type1','Coffee');
            $scope.items = obj;
            break;
          default:
            obj = data;
            $scope.items = obj;
        }

        var lats = getValues(obj ,'establishement_lat');
        var longs = getValues(obj ,'establishement_long');
        $scope.lats = lats;
        $scope.longs = longs;

        navigator.geolocation.getCurrentPosition(function(position) {
          var lat1 = position.coords.latitude;
          var lng1 = position.coords.longitude;
          var distances = [];
          // console.log(distance);
          $scope.$apply(function(){
            // $scope.distance = distance;
            $scope.lat = lats;
            $scope.lng = lng1;
            for (var i = 0 ; i < longs.length; i++) {
              distances[i]  = getDistanceBetween(lat1, lng1, $scope.lats[i], $scope.longs[i], 'K');
              obj[i].distance = distances[i];
            }
            obj.sort(function(a, b) {
                return parseFloat(a.distance) - parseFloat(b.distance);
            });
            $scope.items = obj;
          });
        });

      });
    }

    $('#cta-hero').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});

  });
