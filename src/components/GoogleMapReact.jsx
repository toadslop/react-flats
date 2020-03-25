/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.856033,
      lng: 2.34689
    },
    zoom: 13
  };

  render() {
    const { center, selectedApartmentLat, selectedApartmentLng } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div className="map-container" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.props.center}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={(selectedApartmentLat === null) ? 0 : selectedApartmentLat}
            lng={(selectedApartmentLng === null) ? 0 : selectedApartmentLng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
