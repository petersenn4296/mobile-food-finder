var express = require('express');
var router = express.Router();
// let app = express(); do we need this if using router??

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(200, 'good job');
});
/////////Trucks///////

router.get('/api/trucks/', function(req, res, next) {
   //code block to get trucks locations from database
});



module.exports = router;
