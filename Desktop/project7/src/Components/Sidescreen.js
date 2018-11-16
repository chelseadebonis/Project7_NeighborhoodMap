import React, { Component } from 'react';
import '../App.css';
import Drawer from '@material-ui/core/Drawer';


class Sidescreen extends Component {
  state = {
    open: false,
    query: ''
  }
useNextVariants: true
    render() {
      //  let { filteredVenues, filterVenues, listItemClick, query } = this.props;
      const { query } = this.props;
        return (
          <div id="sidebar">
            <Drawer open={this.props.open} onClose={this.props.openSidebar}>
            <div id="topBar">
            <input
                placeholder="search by name"
                value = {query}
                onChange = {(e)=>{this.props.filterVenues(e.target.value)}}
            />
            <button id="close_button"
              onClick={this.props.openSidebar}>
            ></button>
            </div>
          <br/>

          {
            this.props.filteredVenues && this.props.filteredVenues.length > 0 &&
            this.props.filteredVenues.map((venue, index) => (
              <button key={index} className="venue-item" onClick={() => { this.props.listItemClick(venue) }}>
              { venue.name }
              </button>
          ))
          }
          </Drawer>
          </div>
        )
}
}
export default Sidescreen;
