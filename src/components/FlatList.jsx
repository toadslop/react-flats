/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import flats from '../../data/flats';
import Flat from './Flat';

export default class FlatList extends Component {
  selectedClasses="card active"

  classes="card"

  render() {
    const { setSelectedApartment, selectedApartmentId } = this.props;
    
    return (
      <div className="flat-list">
        {flats.map(({
          name, imageUrl, price, priceCurrency, lat, lng
        }, index) => {
          const classesList = (selectedApartmentId === index) ? this.selectedClasses : this.classes;
          return (<Flat
            classesList={classesList}
            selectedApartmentId={selectedApartmentId}
            setSelectedApartment={setSelectedApartment}
            key={`${lat} ${lng}`}
            name={name}
            imageUrl={imageUrl}
            price={price}
            priceCurrency={priceCurrency}
            lat={lat}
            lng={lng}
            id={index}
          />
          );
        })}
      </div>
    );
  }
}
