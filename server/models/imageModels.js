var mongoose = require('mongoose');
var likesSchema = require('../models/likeModel.js');

var imageSchema = new mongoose.Schema({

  url: {type: String, required: true},
  author: {type: String, required: true},
  title: {type: String, required: true},
  behance: {type: String, required: false},
  linkedin: {type: String, required: false},
  facebook: {type: String, required: false},
  website: {type: String, required: false},
  likes: likesSchema,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

});

module.exports = mongoose.model('Image', imageSchema);
