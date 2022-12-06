var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res, next) {
  res.render('contact/contact', { title: "Contact"});
});

router.get('/about', function(req, res, next) {
  res.render('about/about', { title: "About"});
});
router.get('/', function(req, res, next) {
  res.render('index', { title: "Main"});
});

module.exports = router;