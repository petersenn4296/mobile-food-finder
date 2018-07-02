$(document).ready((e) => {

    $.get('/eater_map', (data) => {
      for (let i = 0; i < data.length; i++) {
        let pop = new mapboxgl.Popup({
          closeOnClick: true
        })
        .setHTML(
          '<div class="card">  <div class="col s12 m6"> <div class="card-content black-text"> <div class="card-image"><img src="img/food-truck.jpg"></div>  <span class="card-title">EDISONS TRUCK</span>  <p>I am a food truck. We sell Mexico foods.  </p> </div>  <div class="card-action"> <a href="https://www.mexico.com">Website</a> </div> </div> </div>'
        )
        // create DOM element for the marker
        let newDiv = document.createElement('div')
        newDiv.id = "newDiv"

        $('#newDiv').css({
          'background-image': 'url(img/venezuelan.png)',
          'height': '50px',
          'width': '50px',
          'background-size': 'cover'
        })

        new mapboxgl.Marker(newDiv)
        .setLngLat([data[i].longitude, data[i].latitude])
        .setPopup(pop)
        .addTo(map)
    }
  })
})
