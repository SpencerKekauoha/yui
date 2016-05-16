var mongoose = require('mongoose');

var  likesSchema = new mongoose.Schema({

  likes: [
    {
      like: {type: Number}
    }
  ]

});

module.exports = likesSchema;
