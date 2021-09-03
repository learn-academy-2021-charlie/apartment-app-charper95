import React, { Component } from "react"

class ApartmentShow extends Component {
  render () {
    const {apartment} = this.props
    return (
      <div className="page container">
        <h3 className="text-center">{apartment && apartment.street}, {apartment && apartment.city}, {apartment && apartment.state}</h3>
        <p>Manager: {apartment && apartment.manager} | Email: {apartment && apartment.email}</p>
        <p>Price: ${apartment && apartment.price} | {apartment && apartment.bedrooms} Bed | {apartment && apartment.bathrooms} Bath</p>
        <p>{apartment && apartment.pets}</p>
      </div>
    );
  }
}

export default ApartmentShow