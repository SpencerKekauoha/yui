var express = require("express");
var bodyParser = require("body-parser");
var session = require('express-session');
var mongoose = require("mongoose");


// CONFIG //
var config = require('./config/config.js');

// CONTROLLERS //
var imageCtrl = require('./controllers/imageCtrl.js');
var UserCtrl = require('./controllers/UserCtrl.js');

// SERVICES //
var passport = require('./services/passport.js');

// POLICIES //
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};

// var prereq = function(req, res, next) {
//   console.log(req.user);
//   console.log(req.user._id.toHexString());
//   if (req.user) {
//     req.body.user = req.user._id.toHexString();
//     next();
//     return true;
//   } else {
//     next();
//     return res.status(401).send();
//   }
// };

var app = express();

app.use(bodyParser.json());
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));


// IMAGES //
app.get('/api/images', imageCtrl.imageRead);
app.post('/api/images', imageCtrl.imageCreate);
app.get('/api/images/:id', imageCtrl.imageIdRead);
app.put('/api/images/:id', imageCtrl.imageUpdate);
app.delete('/api/images/:id', isAuthed, imageCtrl.imageDelete);

// AUTH //
app.post('/users', UserCtrl.register);
app.get('/me', isAuthed, UserCtrl.me);
app.put('/users/:_id', isAuthed, UserCtrl.update);
// app.get('/users/:id', UserCtrl.userIdRead);
// app.get('/users', UserCtrl.userRead);

app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));
app.get('/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});


// CONNECTIONS //
var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to Mongo DB at', mongoURI);
  app.listen(port, function() {
    console.log('Listening on port '+ port);
  });
});
