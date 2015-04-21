var todoApp = angular.module('todo', ['ngRoute', 'todoControllers']);
todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/main.html',
        controller: 'todoCtrl'
      }).
      when('/item/:itemId', {
        templateUrl: 'templates/detail.html',
        controller: 'itemCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);