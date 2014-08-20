'use strict';


// Declare app level module which depends on filters, and services
angular.module('Passwerd', [
  'ngRoute',
  'Passwerd.filters',
  'Passwerd.services',
  'Passwerd.directives',
  'Passwerd.controllers',
  'mgo-angular-wizard'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/generate', {templateUrl: 'partials/generate.html', controller: 'Generator'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'About'});
  $routeProvider.otherwise({redirectTo: '/generate'});
}]);
