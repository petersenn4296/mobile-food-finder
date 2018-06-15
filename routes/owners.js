var express = require('express');
var router = express.Router();
// let app = express(); do we need this if using router??


//////Register OWNER

router.post('/api/owners/owner_signup', (req, res, next) {
  //code block to register, form validate and enter the information of a new food Truck into the database.
})


//Logging In OWNER
router.post('/api/owners/owner_login', function(req, res, next) {
  //code block to authenticate Owners username and password
})

//Logged In OWNER
router.patch('/api/owners/:owners_ID/trucks/:truck_id/', funciton(req, res, next) {
  //code block to update a trucks location after hitting Google Maps API. AJAX to check if online
})



//delete truck from database
router.delete('/api/trucks/:truck_id', function(req, res, next) {
    //code block to DELETE truck from database
})
