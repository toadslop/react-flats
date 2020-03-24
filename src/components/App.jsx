import React, { Component } from 'react';
import GoogleMap from './GoogleMapReact';
import FlatList from './FlatList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedApartmentLat: null,
      selectedApartmentLng: null
    };
  }

  setSelectedApartment = (lat, lng) => {
    this.setState({
      selectedApartmentLat: lat,
      selectedApartmentLng: lng
    });
  }

  render() {
    const { selectedApartmentLat, selectedApartmentLng } = this.state;
    return (
      <div>
        <FlatList setSelectedApartment={this.setSelectedApartment} />
        <GoogleMap center={{ lat: selectedApartmentLat, lng: selectedApartmentLng }} selectedApartmentLat={selectedApartmentLat} selectedApartmentLng={selectedApartmentLng} />
      </div>
    );
  }
}
