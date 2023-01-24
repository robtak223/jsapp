const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.get('/projects', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/projects.html'));
});
app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/contact.html'));
});
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/about.html'));
});

app.get('/projects/chess', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/chess.html'));
});



app.get('/views/website.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/website.html'));
});
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);