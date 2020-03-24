import React, { Component } from 'react';
import flats from '../../data/flats';
import Flat from './Flat';

export default class FlatList extends Component {
  render() {
    return (
      <div className="flat-list">
        {flats.map(({ name, imageUrl, price, priceCurrency, lat, lng }) => {
          return <Flat key={`${lat} ${lng}`} name={name} imageUrl={imageUrl} price={price} priceCurrency={priceCurrency} lat={lat} lng={lng}/>
        })}
      </div>
    )
  }
}
