import React, { Component } from 'react';
import './App.css';
import { load_google_maps } from './utils.js';
import { load_places } from './utils.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  componentDidMount() {
    let googleMapsPromise = load_google_maps();
    let placesPromise = load_places();

    Promise.all([
      googleMapsPromise,
      placesPromise
    ])
    .then(values => {
      let google = values[0];
      let venues = values[1].response.venues;

      this.google = values
      this.markers = [];
      this.map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 40.440624, lng: -79.995888},
         zoom: 10
       });
      this.infoWindow = new google.maps.InfoWindow();

      venues.forEach(venue => {
        let marker = new google.maps.Marker({
           animation: window.google.maps.Animation.DROP,
           position: {lat: venue.location.lat , lng: venue.location.lng},
           map: this.map,
           venue: venue,
           id: venue.id,
           name: venue.name
         });
         this.markers.push(marker);
      });
    });
  }

  filterVenues(query) {
    //loop through markers and check if query matches input
    //toLowerCase so user search case doesn't affect query
    this.markers.forEach(marker => {
      marker.name.toLowerCase().includes(query.toLowerCase()) == true ?
      marker.setVisible(true) :
      marker.setVisible(false);
    });

    this.setState({ query });
  }

  render() {
    return (
    <main>
      <div id="map">

      </div>
      <div id="sidebar">
        <input value={this.state.query} onChange={(e) => { this.filterVenues(e.target.value) }}/>
      </div>
    </main>
  );
  }
}

export default App;
