import React, { Component } from 'react';

export default class Flat extends Component {
  // selectedClasses="card active"

  // classes="card"

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     classes: "card"
  //   };
  // }

  handleClick = () => {
    const {
      lat, lng, id, setSelectedApartment
    } = this.props;
    // this.setState({
    //   classes: this.selectedClasses
    // });
    setSelectedApartment(lat, lng, id);
  }

  render() {
    const {
      name, imageUrl, price, priceCurrency, classesList
    } = this.props;
    return (
      <div
        onClick={this.handleClick}
        className={classesList}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})` }}
      >
        <p className="card-category">
          {price}
          {priceCurrency}
        </p>
        <h2 className="card-description">{name}</h2>
      </div>
    );
  }
}
