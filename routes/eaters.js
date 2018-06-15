var express = require('express');
var router = express.Router();
// let app = express(); do we need this if using router??

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/////////////EATERS/////////////

router.get('/api/trucks/:truck_id', function(req, res, next) {
    //code block for ther EATER to get the information fropm the Food truck database
});





module.exports = router;
