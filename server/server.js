var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


var imageCtrl = require('./controllers/imageCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/images', imageCtrl.imageRead);
app.post('/api/images', imageCtrl.imageCreate);
app.get('/api/images/:id', imageCtrl.imageIdRead);



app.listen(8000, function(){
    console.log("listening on port 8000");
});

mongoose.connect('mongodb://localhost:27017/yui');
mongoose.connection.once('open', function(){
    console.log('Connected to mongodb\n');
});
