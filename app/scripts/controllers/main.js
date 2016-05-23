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
  .controller('MainCtrl', function ($scope, $http, $routeParams, $window, $sce) {

    $http.get('Row1data.json').success (function(data){
      // console.log(data);

      // TODO: if param1 = numero id déjà présent, on modifie la variable
      // param1 avec l'unique ID correspondant. (temporaire)

      var param1 = $routeParams.param1;
      if(param1 == 14) {
        param1 = "mtl-fantome";
      }
      if(param1 == 33) {
        param1 = "mtl-jatoba";
      }
      if(param1 == 2) {
        param1 = "mtl-olivegourmando";
      }
      if(param1 == 39) {
        param1 = "mtl-squaredominion";
      }
      if(param1 == 53) {
        param1 = "mtl-unicorn";
      }
      if(param1 == 0) {
        param1 = "mtl-piedcochn";
      }
      if(param1 == 44) {
        param1 = "mtl-salondaome";
      }
      if(param1 == 50) {
        param1 = "mtl-m0851";
      }
      if(param1 == 16) {
        param1 = "mtl-lab";
      }
      if(param1 == 41) {
        param1 = "mtl-cafeplume";
      }
      if(param1 == 31) {
        param1 = "mtl-distillerie";
      }
      if(param1 == 12) {
        param1 = "mtl-patricepatissier";
      }
      if(param1 == 13) {
        param1 = "mtl-viceversa";
      }
      if(param1 == 29) {
        param1 = "mtl-dispatch";
      }
      if(param1 == 36) {
        param1 = "mtl-buvettesimone";
      }
      if(param1 == 46) {
        param1 = "mtl-kitsune";
      }
      if(param1 == 26) {
        param1 = "mtl-pullman";
      }
      if(param1 == 18) {
        param1 = "mtl-pikoloexpressobar";
      }
      if(param1 == 32) {
        param1 = "mtl-sparrow";
      }
      if(param1 == 46) {
        param1 = "mtl-kitsune";
      }

      console.log(getObjects(data ,'establishement_name_id',param1));


      if(getObjects(data ,'establishement_name_id',param1) === undefined){
        //console.log(data[param1]);
        $window.location.href = '/index.html';
      }
      var tab = getObjects(data ,'establishement_name_id',param1);
      var item = tab[0];
      $scope.item = item;
        $scope.trustSrc = function(id) {
        return $sce.trustAsResourceUrl("https://instagram.com/p/"+id+"/embed?hidecaption=true");
      }
      // $scope.instagramUrl1.trustAsResourceUrl("http://instagram.com/p/"+$scope.item.establishement_instagram1+"/embed");

      // console.log(getObjects(data ,'establishement_type','Coffee')); //retrieve all POI by establishement_type
      // console.log(getValues(data,'establishement_type')); //retrieve all the establishement_type
      // console.log(getKeys(data,'Coffee')); //retrieve the type of Data for a specific key (coffee in this example)
      $scope.urlImage = "images/"+ item.establishement_name_id + '.jpg'; //"images/"+ data[param1].establishement_id + '.jpg';
      console.log(item  .establishement_name_id);
      var elements = ["colored"];
      // var hover = ["hover-colored"];
      setElementColorsImages("images/"+ $scope.item.establishement_name_id + '.jpg',elements,0, "color");
      // setElementColorsImages("images/"+ $scope.item.establishement_id + '.jpg',hover,0, "a:hover");

    });


    //var iIsVrScrollBar =  frm.contentWindow.document.documentElement.scrollHeight>frm.contentWindow.document.documentElement.offsetHeight ? 1 : 0;
    //var iIsHrScrollBar = frm.contentWindow.document.documentElement.scrollWidth>frm.contentWindow.document.documentElement.offsetWidth ? 1 : 0;

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
