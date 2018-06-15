# mobile-food-finder


Mobile-Food-Finder

Are you hungry? Are you looking for something mobile and fast? Try Mobile-Food-Finder for finding that perfect food truck anywhere near you. With a simple to use interface for finding that perfect truck.

Or are you are food truck owner trying to let people know you are open for business? Mobile-Food-Finder incorporates that same simple to use functionality for your eaters, but for YOU. Simply sign up, sign in, and share your location. Sharing you location will let anyone in the vicinity know your truck is open and ready for business. 

/////////Wireframe flow:///////////////
Wireframe flow chart: https://www.lucidchart.com/invitations/accept/990e30b3-8328-4629-b5c2-f23873e76099



Wireframe screenshots:
Home page — https://wireframe.cc/nsuD92
Eater Sign in/register — https://wireframe.cc/y6N9zU
Eater signed in and looking for trucks — https://wireframe.cc/hKbR1s
Eater clicking on a specific truck — https://wireframe.cc/twSmmR
Owner sign in/up — https://wireframe.cc/VTGwiX
Owner after registering/creating a new truck  — https://wireframe.cc/xIXmHk
Owner signed in and making new truck —- https://wireframe.cc/w1RxuP

 
//////////ERD:///////////////////
https://www.lucidchart.com/invitations/accept/72bbfb0c-4606-41a0-befe-3b87fdbbdd9a



/////////////Trello://////////////
https://trello.com/invite/b/8u8GRnwp/4d121e00f21a037e76acaecebad978b2/q2-mff


///////////Routes:///////////

//////Register OWNER

app.post('/api/owners/owner_signup', (req, res, next)) {
  //code block to register, form validate and enter the information of a new food Truck into the database.
}


//Logged In OWNER

app.post('/api/owners/owner_login') {
  //code to authenticate Owners username and password
}
app.patch('/api/owners/:owners_ID/trucks/:truck_id/') {
  //code block to update a trucks location after hitting Google Maps API. AJAX to check if online
}

app.delete('/api/trucks/:truck_id') {
  //code block to DELETE truck from database
}

/////////Trucks///////

app.get('/api/trucks') {
 //code block to get trucks locations from database
}

/////////////EATERS/////////////

app.get('/api/trucks/:truck_id') {
  //code block for ther EATER to get the information fropm the Food truck database
}
