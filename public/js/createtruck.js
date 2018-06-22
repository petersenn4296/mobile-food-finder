$(document).ready(function() {
// Creating a truck
$('#truckcreate').submit((e)=> {
  e.preventDefault()
  let data = $('#truckcreate').serialize();
  $.post('/create_truck', data).done(function(result) {
    window.location.href = "/owner_home.html"
    });
  })
})
