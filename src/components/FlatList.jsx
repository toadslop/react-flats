import React, { Component } from 'react';
import flats from '../../data/flats';
import Flat from './Flat';

export default class FlatList extends Component {
  render() {
    const { setSelectedApartment } = this.props
    return (
      <div className="flat-list">
        {flats.map(({ name, imageUrl, price, priceCurrency, lat, lng }) => {
          return <Flat setSelectedApartment={setSelectedApartment} key={`${lat} ${lng}`} name={name} imageUrl={imageUrl} price={price} priceCurrency={priceCurrency} lat={lat} lng={lng}/>
        })}
      </div>
    )
  }
}
