var mongoose = require('mongoose');

var  likesSchema = new mongoose.Schema({

  likes: [],
  likeCount: 0,
  imageId: {type: mongoose.Schema.Types.ObjectId, ref: 'Image'}

});

module.exports = mongoose.model('likes', likesSchema);
