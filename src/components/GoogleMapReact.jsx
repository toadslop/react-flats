import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 20.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    console.log(this.props);
    const { center } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div className="map-container" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:  }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={center.lat}
            lng={center.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
