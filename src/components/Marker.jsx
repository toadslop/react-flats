import React, { Component } from 'react';

export default class Marker extends Component {
  render() {
    console.log(this.props.lat);
    return (
      <div className="marker">
      </div>
    )
  }
}
