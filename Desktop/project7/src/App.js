import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBB0GNJz7JVts9FogqSIAghnGUOPdnDiOA&callback=initMap")
    window.initMap = this.initMap
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "20UNPXJ2EXJT2FJRRZTI4I1ZAOWID0GLZSHAHOSFIU3TAHPE",
      client_secret: "KSBXW31GXQMD5PMAIPX5BAEQVT5YXX1SCEUGYK5HLMPGCL0E",
      query: "pizza",
      near: "Pittsburgh",
      v: "20181211"
    }


    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState ({
        venues: response.data.response.groups[0].items
      }, this.renderMap())
    })
    .catch(error => {
      console.log("ERROR!" + error)
    })
  }

  initMap = () => {
//create a map
      var map = new window.google.maps.Map(document.getElementById('map'), {
         center: {lat: 40.440624, lng: -79.995888},
         zoom: 10
       })
//create an info window
      var infowindow = new window.google.maps.InfoWindow();

//display markers
      this.state.venues.map(myVenue => {

         var contentString = `${myVenue.venue.name}`


//create a marker
         var marker = new window.google.maps.Marker({
            animation: window.google.maps.Animation.DROP,
            position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
            map: map,
            title: myVenue.venue.name
          })

        marker.addListener('click', toggleBounce);

        function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
        }
      }

//event listener for clicking markers
        marker.addListener('click', function() {
          //change the content
              infowindow.setContent(contentString)

          //Open window
              infowindow.open(map, marker);
       })
    })
  }


  render() {
    return (
    <main>
    <div id="map"> </div>
    </main>
    )
  }
}

/*
<script
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
   async defer>
</script>

*/

function loadScript(url) {
  const index = window.document.getElementsByTagName('script')[0]
  const script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
