$(document).ready(function() {

//Owners sign on handlers
$('#login').click(function() {
  console.log('clicked login');
    //code to submit form to verify owner in database AJAX request
  })

$('#register').click(function() {
  console.log('clicked register');
  $.post({
    url: url,
    data: {
      username: $('.r-username').val(),
      password: $('.r-password').val(),
      email: $('.r-email').val()
    },
    success: (data) => {
      console.log(data);
    },
    dataType: dataType
  })
    //code to submit form to database to make owners AJAX request
  })



// Creating a truck
$('#createtruck').click(function() {
  console.log('clicked create truck');
  $.post({
    url: '/create_truck',
    data: {
      name: $('#truck_name').val(),
      cuisines: $('.dropdown-item option:selected').text(),
      veggiefriendly: $('.radio-1').val(),
      url: $('#name').val()
    },
    success: (data) => {
        console.log(data)
      },
    dataType: dataType
  });
    //code to submit form to database to create a truck AJAX request
  })
})
