$(document).ready(function() {

// Creating a truck
$('#truckcreate').submit((e)=> {
  e.preventDefault()
  let data = $('#truckcreate').serialize();
  console.log('i am in here', data);
  $.post('/create_truck', data).done(function(result) {
    $('.result').html(result)

    });
  })

})
