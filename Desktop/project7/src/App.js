import React, { Component } from 'react';
import './App.css';
import { load_google_maps } from './utils.js';
import { load_places } from './utils.js';
import Sidescreen from './Components/Sidescreen.js';

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
      this.venues = values[1].response.venues;
      this.google = google;
      this.markers = [];
      //initial settings for the google map
      this.map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 40.440624, lng: -79.995888},
         zoom: 10
       });
      this.infoWindow = new google.maps.InfoWindow();

      this.venues.forEach(venue => {
        let marker = new google.maps.Marker({
           animation: window.google.maps.Animation.DROP,
           position: {lat: venue.location.lat , lng: venue.location.lng},
           map: this.map,
           venue: venue,
           id: venue.id,
           name: venue.name
         });
         //animate markers when clicked
         marker.addListener('click', () => {
           if (marker.getAnimation() !== null) {
             marker.setAnimation(null);
           } else {
             marker.setAnimation(google.maps.Animation.BOUNCE);
           }
           //stop animation after 500
           setTimeout(() => { marker.setAnimation(null) }, 500);
         });
         //info window popup when marker is clicked
           google.maps.event.addListener(marker, 'click', () => {
             this.infoWindow.setContent(marker.name);
             this.map.setCenter(marker.position);
             this.infoWindow.open(this.map, marker);
             this.map.setZoom(15);
           });

         this.markers.push(marker);
      });

      this.setState({ filteredVenues: this.venues });
    }).catch(() => {
      alert('Cannot load Venues at this time.')
    })
  }

listItemClick = (venue) => {
  let marker  = this.markers.filter(m => m.id === venue.id)[0];
  this.infoWindow.setContent(marker.name);
  this.map.setCenter(marker.position);
  this.infoWindow.open(this.map, marker);
  this.map.setZoom(12);
  if (marker.getAnimation() !== null) { marker.setAnimation(null) }
  else { marker.setAnimation(window.google.maps.Animation.BOUNCE); }
    //stop animation after 500
    setTimeout(() => { marker.setAnimation(null) }, 500);
  }



    //loop through markers and check if query matches input
        //toLowerCase so user search case doesn't affect query
  filterVenues = (query) => {
    let vfilter = this.venues.filter(venue => venue.name.toLowerCase().includes(query.toLowerCase()));
          this.markers.forEach(marker => {
          marker.name.toLowerCase().includes(query.toLowerCase())===true?
          marker.setVisible(true):
          marker.setVisible(false);
        })
         this.setState({ filteredVenues : vfilter, query })
      }

      styles = {

        hide: {
          display: 'none'
        },
        header: {
          marginTop: '0px'
        }
      };

//should sidebar be open?
  openSidebar = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (

      <div className="App">
      <div className="nav">
        <button className="burgerIcon"
          onClick={this.openSidebar}>
        </button>
        <br>
        </br>
      </div>
      <div id="map"
        role="application"
        aria-label="map">
      </div>

      <Sidescreen
          query={this.state.query}
          listItemClick={this.listItemClick}
          filterVenues={this.filterVenues}
          filteredVenues={this.state.filteredVenues}
          open={this.state.open}
          openSidebar={this.openSidebar}
      />

      </div>

    );
  }
}

export default App;
