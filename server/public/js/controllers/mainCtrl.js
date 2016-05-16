angular.module('yui').controller('mainCtrl', function($scope, mainService, $state){

  $scope.readImages = function(){
    mainService.getImages().then(function(response){
      $scope.images = response;
    });
  };
  $scope.readImages();

  $scope.createImages = function(image){
    mainService.getUser().then(function(response){
      console.log(response.data._id); 
      $scope.image.user = response.data._id;
      mainService.createImages(image).then(function(response){
      });
      $scope.readImages();
  }).catch(function(err){
      alert('You must be logged in to publish');
      return $state.go('login');
    });
  };

  $scope.readImageId = function(image){
    $scope.selectedImage = image;
  };
  $scope.readImageId();

  $scope.updateImage = function(image){
    mainService.updateImage(image).then(function(response){
      $scope.selectedImage = {};
      $scope.readImages();
    });
  };

  $scope.deleteImage = function(image){
    mainService.deleteImage(image).then(function(response){
      $scope.selectedImage = {};
      $scope.readImages();
    });
  };

  $scope.getCurrentUser = function(){
    mainService.getUser().then(function(response){
      $scope.user = response.data;
    });
  };

  $scope.getCurrentUser();





});
