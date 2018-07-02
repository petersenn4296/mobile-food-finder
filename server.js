/////////EXPRESS SERVER SET UP////////////

//Variables to Require all dependencies and invoke as functions
let express = require('express')
let morgan = require('morgan')
let bodyParser = require('body-parser')
let app = express()

//Set port as variable and console log to check if sever starts and where
let port = process.env.PORT || 3000
let listener = () => {console.log(`Listening in on port ${port}`)}
app.listen(port, listener)

//Set variable knex to require file knex.js
let knex = require('./knex')

//use body parser and make public files
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static('public'))


//////////////ROUTES//////////////

//Create truck in database
app.post('/create_truck', (req, res, next) => {
  knex('trucks')
    .insert({
      "name": req.body.name,
      "cuisine_id": req.body.cuisines,
      "veggiefriendly": req.body.veggiefriendly,
      "url": req.body.url,
      "latitude": req.body.latitude,
      "longitude": req.body.longitude
    })
    .returning('*')
    .then((data) => {
      res.json(data[0])
    })
    .catch((err) => {
      next(err)
    })
})


//Register OWNER
app.post('/owner_signup', (req, res, next) => {
  knex('owners')
    .insert({
      "username": req.body.username,
      "password": req.body.password, //hashed
      "email": req.body.email
    })
    .returning('*')
    .then((data) => {
      console.log(data[0]);
      res.json(data[0])
    })
    .catch((err) => {
      next(err)
  })
})

// Logging In OWNER
app.post('/owner_signon', (req, res, next) => {
  knex('owners')
  .where('username', req.body.username)
  .andWhere('password', req.body.password)
  .then((data) => {
    if (data[0].password && data[0].username) {
      res.send(200, 'u did it');
    }
  })
  .catch((err) => {
    res.send("Please enter the correct info")
  })
})



app.get('/eater_map', (req, res, next) => {
  knex('trucks').select('latitude', 'longitude')
  .returning('*')
  .then((rows) => {
      res.json(rows)
    })
    .catch((err) => {
      next("err", err)
  })
})



///////////STRETCH///////////
//Logged In OWNER, making change to trucks info
app.patch('/owners/:owners_ID/trucks/:truck_id/', (req, res, next) => {
  res.send(200, "owner edit truck")
  //code block to update a trucks location after hitting Google Maps API. AJAX to check if online
})

///EATER GET specific truck info on map
app.get('/:truck_id', (req, res, next) => {
  // return knex('trucks')
  //code block to get specific trucks locations from database
});

//Logged In OWNER, DELETE truck from database
app.delete('/trucks/:truck_id', (req, res, next) => {
  res.send(200, "owner delete truck")
    //code block to DELETE truck from database
})

//Landing page
app.get('/', (req, res, next) => {
  res.send("welcome to the home page")
})
/////////STRETCH///////////

//Catch all for bad requests
app.use((req, res, next) => {
  res.status(404).json({error:{message:"404 Not Found"}})
})
