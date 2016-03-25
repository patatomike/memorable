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
      console.log(data);
      var param1 = $routeParams.param1;
      $scope.item = data[param1];

    });

    var img = document.createElement('img');
    img.setAttribute('src', 'images/post-bg.jpg')

    img.addEventListener('load', function() {
        var vibrant = new Vibrant(img);
        var swatches = vibrant.swatches()
        for (var swatch in swatches)
            if (swatches.hasOwnProperty(swatch) && swatches[swatch])
                console.log(swatch, swatches[swatch].getHex())

        /*
         * Results into: * Vibrant #7a4426  * Muted #7b9eae * DarkVibrant #348945 * DarkMuted #141414 * LightVibrant #f3ccb4
         */

         document.getElementById('blockquote').style.color = '#7a4426';
    });

  });
