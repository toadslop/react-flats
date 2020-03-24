import React, { Component } from 'react'

export default class Flat extends Component {
  render() {
    const {name, imageUrl, price, priceCurrency} = this.props;
    return (
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})` }}>
        <p className="card-category">{price} {priceCurrency}</p>
        <h2 className="card-description">{name}</h2>
      </div>
    )
  }
}
