// Set express application variables
var express = require('express');
var app = express();

// Set view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Set port we are going to use
app.set('port', (process.env.PORT || 5000));

// Set public directory
app.use(express.static(__dirname + '/../client'));

app.get('/', function(request, response) {
  response.render('index',{title:'Your App'});
});

app.get('/helloworld', function(request, response) {
  response.send('Hello World!');
});

app.listen(app.get('port'), function() {
  var string = "App is running on localhost port:";
  console.log(string, app.get('port'));
});
