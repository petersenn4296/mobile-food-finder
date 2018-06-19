$(document).ready(function() {
$('#register').submit(function(e) {
  e.preventDefault()
  // console.log("hello");
  let data = $('#register').serialize();
  // console.log('this is the data', data);
  $.post('/owner_signup', data).done(function(result) {
    console.log(result);
    })
  })
})
