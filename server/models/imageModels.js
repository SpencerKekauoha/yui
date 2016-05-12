var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({

  url: {type: String, required: true},
  author: {type: String, required: true}

});

module.exports = mongoose.model('Image', imageSchema);
