var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({

  url: {type: String, required: true},
  author: {type: String, required: true},
  title: {type: String, required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

});

module.exports = mongoose.model('Image', imageSchema);
