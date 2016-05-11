var Image = require('../models/imageModels.js');

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
    Image.find()
      .exec(function(err, response){
        if(err){
          res.status(500).json(err);
        } else {
          res.status(200).json(response);
        }
      });
  }

};
