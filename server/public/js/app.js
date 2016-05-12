angular.module('yui', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('explore', {
      url: '/explore',
      templateUrl: '../views/exploreTmpl.html'
    })

    .state('post', {
      url: '/post',
      templateUrl: '../views/postTmpl.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: '../views/loginTmpl.html'
    })

    .state('yui', {
      url: '/yui',
      templateUrl: '../views/yuiTmpl.html'
    });

    $urlRouterProvider
      .otherwise('/explore');

  });
