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
    });

    $urlRouterProvider
      .otherwise('/explore');

  });
