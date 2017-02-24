console.log('Server Sanity Check');

//require express in our app
var express = require('express');
var bodyParser = require('body-parser');
// generate a new express app and call it 'app'
var app = express();
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
