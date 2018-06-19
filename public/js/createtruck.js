$(document).ready(function() {

// Creating a truck
$('#truckcreate').submit((e)=> {
  console.log('i am in here');
  e.preventDefault()
  let data = $('#truckcreate').serialize();
  $.post('/create_truck', data).done(function(result) {
    $('.result').html(result)
    });
  })
})
