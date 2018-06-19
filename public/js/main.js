$(document).ready(function() {

//Owners sign on handlers
$('#login').click(function() {
  console.log('clicked login');
    //code to submit form to verify owner in database AJAX request
  })

$('#register').click(function(e) {
  // e.preventDefault()
  // console.log("hello");
  let data = $('form').serialize();
  // console.log('this is the data', data);
  $.post('owners/owner_signup', data).done(function(result) {
    // console.log(result);
  })
    //code to submit form to database to make owners AJAX request
  })



// Creating a truck
$('#createtruck').click(function(e) {

  let data = $('form').serialize();
  $.post('/create_truck', data).done(function(result) {
    console.log(result);
    });
  })
})
