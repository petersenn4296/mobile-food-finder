$(document).ready(() => {
$('#register').submit((e) => {
  e.preventDefault()
  let data = $('#register').serialize();
  $.post('/owner_signup', data).done((result) => {
    window.location.href = "/create_truck.html"
    })
  })
})
