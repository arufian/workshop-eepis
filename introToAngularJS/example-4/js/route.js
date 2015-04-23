var todoApp = angular.module('todo', ['ui.router', 'todoControllers', 'todoDirectives']);
todoApp.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('main', {
        abstract: true,
        controller: 'todoCtrl',
        templateUrl: 'templates/main.html'
    })
    .state('main.anonymous', {
        url: '/',
        views: {
          'login-link@': {
            templateUrl: 'templates/login-link/login.html',
          }
        }
    })
    .state('main.admin', {
      url: '/admin',
      views: {
        'remove-item@main': {
          templateUrl: 'templates/admin/remove.html',  
        },
        'login-link@': {
          templateUrl: 'templates/login-link/logout.html',
        }
      }
    })
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    })
    .state('logout', {
        url: '/logout',
        controller: 'loginCtrl'
    })
    .state('item', {
        url: '/item/:itemId',
        views: {
          '@': {
            templateUrl: 'templates/detail.html',  
            controller: 'itemCtrl'
          },
          'login-link@': {
            templateUrl: 'templates/login-link/login.html',
          }
        },
    })
    .state('item.admin', {
        url: '/item/:itemId',
        views: {
          '@main': {
            templateUrl: 'templates/detail.html',  
          },
          'login-link@': {
            templateUrl: 'templates/login-link/logout.html',
          }
        }
    });
  }]);