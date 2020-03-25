import React, { Component } from 'react';
import GoogleMap from './GoogleMapReact';
import FlatList from './FlatList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedApartmentLat: null,
      selectedApartmentLng: null,
      selectedApartmentId: null,
      lastSelectedApartmentId: null
    };
  }

  setSelectedApartment = (lat, lng, id) => {
    const { selectedApartmentId } = this.state;
    this.setState({
      selectedApartmentLat: lat,
      selectedApartmentLng: lng,
      selectedApartmentId: id,
      lastSelectedApartmentId: selectedApartmentId
    });
  }

  render() {
    const { selectedApartmentLat, selectedApartmentLng, selectedApartmentId, lastSelectedApartmentId } = this.state;
    return (
      <div>
        <FlatList
          selectedApartmentId={selectedApartmentId}
          lastSelectedApartmentId={lastSelectedApartmentId}
          setSelectedApartment={this.setSelectedApartment}
        />
        <GoogleMap selectedApartmentLat={selectedApartmentLat} selectedApartmentLng={selectedApartmentLng} />
      </div>
    );
  }
}
