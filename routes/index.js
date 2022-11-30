var express = require('express');
var router = express.Router();

const fetchVideos = async () => {
  const options = {
   method: 'GET',
   url: `https://youtube.googleapis.com/youtube/v3/search? part=snippet&maxResults=50&id=dQw4w9WgXcQ&key=AIzaSyDrCOtNiJ4KjHhkOI15YaOd8MacXyNoWZM`
   };
  const result = await axios(options)
  return result.data
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Hello"});
});

module.exports = router;
