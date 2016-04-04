/* jshint ignore:start */
'use strict';

/**
 * @ngdoc function
 * @name memorableAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memorableAppApp
 */
angular.module('memorableAppApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams, $window) {

    $http.get('Row1data.json').success (function(data){
      // console.log(data);
      var param1 = $routeParams.param1;
      if(data[param1] === undefined){
        console.log(data[param1]);
        $window.location.href = '/index.html';
      }
      $scope.item = data[param1];
      // console.log(getObjects(data ,'establishement_type','Coffee')); //retrieve all POI by establishement_type
      // console.log(getValues(data,'establishement_type')); //retrieve all the establishement_type
      // console.log(getKeys(data,'Coffee')); //retrieve the type of Data for a specific key (coffee in this example)
      $scope.urlImage = "images/"+ data[param1].establishement_id + '.jpg'; //"images/"+ data[param1].establishement_id + '.jpg';
      console.log(data[param1].establishement_id);
      var elements = ["colored"];
      // var hover = ["hover-colored"];
      setElementColorsImages("images/"+ $scope.item.establishement_id + '.jpg',elements,0, "color");
      // setElementColorsImages("images/"+ $scope.item.establishement_id + '.jpg',hover,0, "a:hover");

    });

    // var img = document.createElement('img');
    // img.setAttribute('src', 'images/post-bg.jpg')
    //
    // img.addEventListener('load', function() {
    //     var vibrant = new Vibrant(img);
    //     var swatches = vibrant.swatches()
    //     for (var swatch in swatches)
    //         if (swatches.hasOwnProperty(swatch) && swatches[swatch])
    //             console.log(swatch, swatches[swatch].getHex()
    //
    //      document.getElementById('blockquote').style.color = '#7a4426';
    // });

});

/* jshint ignore:end */
