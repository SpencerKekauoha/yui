angular.module('yui').service('mainService', function($http){

  this.getImages = function(){
    return $http({
      method: 'GET',
      url: '/api/images'
    }).then(function(response){
      return response.data;
    });
  };

  this.createImages = function(imageUrl){
    console.log(imageUrl);
    return $http({
      method: 'POST',
      url: '/api/images',
      data: {url:imageUrl}
    }).then(function(response){
      return response.data;
    });
  };

});
