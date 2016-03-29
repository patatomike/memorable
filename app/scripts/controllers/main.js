'use strict';

/**
 * @ngdoc function
 * @name memorableAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memorableAppApp
 */
angular.module('memorableAppApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams) {

    $http.get('Row1data.json').success (function(data){
      // console.log(data);
      var param1 = $routeParams.param1;
      $scope.item = data[param1];
      console.log(getObjects(data ,'establishement_type','Coffee')); //retrieve all POI by establishement_type
      console.log(getValues(data,'establishement_type')); //retrieve all the establishement_type
      console.log(getKeys(data,'Coffee')); //retrieve the type of Data for a specific key (coffee in this example)
    });

    setElementColorsImages('images/post-bg.jpg','blockquote',1);
    setElementColorsImages('images/post-bg.jpg','blockquote2',0);
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
