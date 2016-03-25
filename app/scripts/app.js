'use strict';

/**
 * @ngdoc overview
 * @name memorableAppApp
 * @description
 * # memorableAppApp
 *
 * Main module of the application.
 */
angular
  .module('memorableAppApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:param1', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
