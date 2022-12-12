const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/contact.html'));
  });
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);