angular.module('yui', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('explore', {
      url: '/explore',
      templateUrl: '../views/exploreTmpl.html'
    });

    $urlRouterProvider
      .otherwise('/explore');

  });
