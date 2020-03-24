import React, { Component } from 'react';
import GoogleMap from './GoogleMapReact';
import FlatList from './FlatList';

export default class App extends Component {
  render() {
    return (
      <div>
        <FlatList/>
        <GoogleMap/>
      </div>
    )
  }
}
