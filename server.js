console.log('Server Sanity Check');

//require express in our app
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    db = require('./models'),
    mongoose = require('mongoose'),
    controllers = require('./controllers'),
    auth = require('./resources/auth'),
    util = require('util');

require('dotenv').load();

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use('/vendor', express.static(__dirname + '/node_modules'));
app.use(bodyParser.urlencoded({ extended: true }));
// need to add this so that we can accept request payloads
app.use(bodyParser.json());



/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  console.log("App.get /")
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  console.log(name, "name");
  res.sendFile(__dirname + '/views/templates/' + name + '.html' );
});



/*
 * API Endpoints
 */

 app.get('/api', controllers.api.index);
 app.get('/api/users', controllers.users.users_index);
 app.get('/api/users/:id', controllers.users.users_show);
 app.get('/api/me', auth.ensureAuthenticated, function (req, res) {
  db.User.findById(req.user, function (err, user) {
    console.log(user);
    res.send(user);
  });
});
app.put('/api/me', auth.ensureAuthenticated, function (req, res) {
  db.User.findById(req.user, function (err, user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found.' });
    }
    user.username = req.body.username || user.username;
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.language = req.body.language || user.language;
    user.age = parseInt(req.body.age) || parseInt(user.age);
    user.gender = req.body.gender || user.gender;
    user.specialty = req.body.specialty || user.specialty;
    user.blurb = req.body.blurb || user.blurb;
    user.save(function(err) {
      res.send(user);
    });
  });
});


 // app.get('/api', function api (req, res) {
 //   res.sendFile(controllers.api.index);
 // });

 /*
  * Auth Routes
  */

 app.post('/auth/signup', function (req, res) {
   db.User.findOne({ email: req.body.email }, function (err, existingUser) {
     if (existingUser) {
       return res.status(409).send({ message: 'Email is already taken.' });
     }
     var user = new db.User({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       username: req.body.username,
       email: req.body.email,
       password: req.body.password,
       language: req.body.language,
       age: parseInt(req.body.age),
       gender: req.body.gender,
       specialty: req.body.specialty,
       profilepic: req.body.profilepic,
       residence: {
         city: req.body.residence.city,
         province: req.body.residence.province,
         country: req.body.residence.country
       }
      //  availability: {
      //    morning: req.body.availability.morning,
      //    noon: req.body.availability.noon,
      //    afternoon: req.body.availability.afternoon,
      //    evening: req.body.availability.evening,
      //    night: req.body.availability.night
      //  }
     });
     user.save(function (err, result) {
       if (err) {
         res.status(500).send({ message: err.message });
       }
       res.send({ token: auth.createJWT(result) });
     });
   });
 });

 app.post('/auth/login', function (req, res) {
   db.User.findOne({ email: req.body.email }, function (err, user) {
     if (!user) {
       return res.status(401).send({ message: 'Invalid email.' });
     }
     user.comparePassword(req.body.password, function (err, isMatch) {
       if (!isMatch) {
         return res.status(401).send({ message: 'Invalid password.' });
       }
       res.send({ token: auth.createJWT(user) });
     });
   });
 });


 // ALL OTHER ROUTES (ANGULAR HANDLES)
 // redirect all other paths to index
 app.get('*', function homepage (req, res) {
   res.sendFile(__dirname + '/views/index.html');
 });

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
