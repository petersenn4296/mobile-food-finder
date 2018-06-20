$(document).ready(function() {
$('#register').submit(function(e) {
  e.preventDefault()
  let data = $('#register').serialize();
  $.post('/owner_signup', data).done(function(result) {
    console.log(result);
    window.location.href = "/create_truck.html"
    })
  })
})
