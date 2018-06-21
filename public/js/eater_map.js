$(document).ready(function(e) {

    $.get('/eater_map', function(data) {
      console.log('made it in the get', data);

      for (var i = 0; i < data.length; i++) {
        console.log('this is finally the loop>>.', data);
        console.log('latitude is', data[i].latitude);
        console.log('longitude is', data[i].longitude)
        var pop = new mapboxgl.Popup({
          closeOnClick: true
        })
        .setHTML(
          '<div class="card">  <div class="col s12 m6"> <div class="card-content black-text"> <div class="card-image"><img src="img/food-truck.jpg"></div>  <span class="card-title">EDISONS TRUCK</span>  <p>I am a food truck. We sell Mexico foods.  </p> </div>  <div class="card-action"> <a href="https://www.mexico.com">Website</a> </div> </div> </div>'
        )

        // create DOM element for the marker
        let newDiv = document.createElement('div');
        newDiv.id = "newDiv"

        $('#newDiv').css({
          'background-image': 'url(img/venezuelan.png)',
          'height': '50px',
          'width': '50px',
          'background-size': 'cover'
        })

        console.log("hello", newDiv);

        new mapboxgl.Marker(newDiv)
        .setLngLat([data[i].longitude, data[i].latitude])
        .setPopup(pop) // sets a popup on this marker
        .addTo(map)


      }
    })
  // })


})
