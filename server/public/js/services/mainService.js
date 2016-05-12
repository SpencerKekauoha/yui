angular.module('yui').service('mainService', function($http){

  this.getImages = function(){
    return $http({
      method: 'GET',
      url: '/api/images'
    }).then(function(response){
      return response.data;
    });
  };

  this.createImages = function(image){
    console.log(image);
    return $http({
      method: 'POST',
      url: '/api/images',
      data: image
    }).then(function(response){
      return response.data;
    });
  };

  this.getImageId = function(image){
    return $http({
      method: 'GET',
      url: '/api/images/' + image,
      data: image
    }).then(function(response){
      return response.data;
    });
  };

  this.updateImage = function(image){
    var id = image._id;
    delete image._id;
    return $http({
      method: 'PUT',
      url: '/api/images/' + id,
      data: image
    }).then(function(response){
      return response.data;
    });
  };

});
