angular.module('yui').controller("loginCtrl", function($scope, mainService, $state) {

  $scope.register = function() {
    mainService.register($scope.newUser).then(function(response) {
    });
  };

  $scope.login = function() {
  mainService.login($scope.credentials).then(function(response) {
    $state.go('explore');
    console.log(response.data);
    alert('Welcome ' + response.data);
  });
};

$scope.logout = function () {
  console.log('working');
  mainService.logout().then(function(response) {
    console.log(response);
    $state.go('explore');
    alert('Logout Successful');
  });
};



});
