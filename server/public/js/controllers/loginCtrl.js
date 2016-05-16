angular.module('yui').controller("loginCtrl", function($scope, mainService, $state) {

  $scope.register = function() {
    mainService.register($scope.newUser).then(function(response) {
    });
  };

  $scope.login = function() {
  mainService.login($scope.credentials).then(function(response) {
    $state.go('explore');
    $scope.user = response.data._id;
    alert('Welcome ' + response.data.name);
  });
};

$scope.logout = function () {
  mainService.logout().then(function(response) {
    $state.go('explore');
    alert('Logout Successful');
  });
};



});
