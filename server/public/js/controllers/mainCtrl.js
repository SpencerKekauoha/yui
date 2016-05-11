angular.module('yui').controller('mainCtrl', function($scope, mainService, $state){

  $scope.readImages = function(){
    mainService.getImages().then(function(response){
      console.log(response);
      $scope.images = response;
    });
  };
  $scope.readImages();

  $scope.createImages = function(imageUrl){
    mainService.createImages(imageUrl).then(function(response){
    });
    $scope.readImages();
  };

  $scope.readImageId = function(image){
    $scope.selectedImage = image;
  };
  $scope.readImageId();


});
