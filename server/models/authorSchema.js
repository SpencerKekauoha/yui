var mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({

  designers: [
    {
      designer: {type: String, ref: 'Designer'}
    }
  ]

});

module.exports = authorSchema;
