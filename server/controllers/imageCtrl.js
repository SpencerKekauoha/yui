var Image = require('../models/imageModels.js');
var User = require('../models/UserModel.js');
var Likes = require('../models/likeModel.js');

module.exports = {

  imageCreate: function(req, res, next){
    var newImage = new Image(req.body);
    newImage.save(function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    });
  },

  imageRead: function(req, res, next){
    Image.find().populate('user')
      .exec(function(err, response){
        if(err){
          res.status(500).json(err);
        } else {
          res.status(200).json(response);
        }
      });
  },

  imageIdRead: function(req, res, next){
    Image.findById(req.params.id)
      .exec(function(err, response){
        if(err){
          res.status(500).json(err);
        } else {
          res.status(200).json(response);
        }
      });
  },

  imageUpdate: function(req, res, next){
    Image.findByIdAndUpdate(req.params.id, req.body, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    });
  },

  imageDelete: function(req, res, next){
    Image.findByIdAndRemove(req.params.id, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    });
  },

  // LIKES //

  addLike: function(req, res, next){
    Image.findByIdAndUpdate(req.params.id, {$addToSet: { likes: req.user._id}}, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    });
  },

  // removeLike: function(req, res, next){
  //   Image.findByIdAndRemove(req.params.id, {$removeFromSet: {likes: req.user._id}}, function(err, response){
  //     if(err){
  //       res.status(500).json(err);
  //     } else {
  //       res.status(200).json(response);
  //     }
  //   });
  // }

};
