angular.module('yui').service('mainService', function($http){


// IMAGES //
  this.getImages = function(){
    return $http({
      method: 'GET',
      url: '/api/images'
    }).then(function(response){
      return response.data;
    });
  };

  this.createImages = function(image){
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

  this.deleteImage = function(image){
    var id = image._id;
    delete image._id;
    return $http({
      method: 'DELETE',
      url: '/api/images/' + id,
      data: image
    }).then(function(response){
      return response.data;
    });
  };

  // LIKES //

  this.updateLikes = function(image) {
    var id = image._id;
    delete image._id;
    return $http({
      method: 'PUT',
      url: '/api/likes/' + id,
      data: image
    }).then(function(response){
      return response.data;
    });
  };

  // this.removeLikes = function(image) {
  //   var id = image._id;
  //   delete image._id;
  //   return $http({
  //     method: 'DELETE',
  //     url: '/api/likes/' + id,
  //     data: image
  //   }).then(function(response){
  //     return response.data;
  //   });
  // };

  // Auth //
  this.register = function(user) {
    return $http({
      method: 'POST',
      url: '/users',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.getUser = function() {
    return $http({
      method: 'GET',
      url: '/me',
    }).then(function(response) {
      return response;
    });
  };

  this.login = function(user) {
    return $http({
      method: 'POST',
      url: '/login',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.logout = function() {
    return $http({
      method: 'GET',
      url: '/logout',
    }).then(function(response) {
      return response;
    });
  };


});
