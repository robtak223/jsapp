var express = require('express');
var router = express.Router();

const fetchVideos = async () => {
  const options = {
   method: 'GET',
   url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&id=dQw4w9WgXcQ&key=AIzaSyDrCOtNiJ4KjHhkOI15YaOd8MacXyNoWZM`
   };
  const result = await axios(options)
  return result.data
}

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
