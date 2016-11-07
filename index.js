var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/sanfrancisco', function(req, res) {
  res.render('sanfrancisco');
});

app.get('/claremont', function(req, res) {
  res.render('claremont');
});

app.get('/uppsala', function(req, res) {
  res.render('uppsala');
});

app.listen(port, function () {
  console.log('Application is running on http://localhost:' + port);
});

// AIzaSyBmkr8TmD8x5uppiNmwYlM70fFPBPPofqg
