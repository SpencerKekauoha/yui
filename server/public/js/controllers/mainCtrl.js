angular.module('yui').controller('mainCtrl', function($scope, mainService, $state){

  $scope.readImages = function(){
    mainService.getImages().then(function(response){
      console.log(response);
      $scope.images = response;
    });
  };
  $scope.readImages();

  $scope.createImages = function(image){
    mainService.createImages(image).then(function(response){
    });
    $scope.readImages();
  };

  $scope.readImageId = function(image){
    $scope.selectedImage = image;
  };
  $scope.readImageId();


});
