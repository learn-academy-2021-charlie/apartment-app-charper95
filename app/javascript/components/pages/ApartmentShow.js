import React, { Component } from "react"
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class ApartmentShow extends Component {
  render () {
    const {apartment, deleteApartment} = this.props
    return (
      <div className="page-show container">
        <div className="show-page">
          <div className="box">
            <h3 className="text-center">{apartment && apartment.street}, {apartment && apartment.city}, {apartment && apartment.state}</h3>
            <p>Manager: {apartment && apartment.manager} | Email: {apartment && apartment.email}</p>
            <p>Price: ${apartment && apartment.price} | {apartment && apartment.bedrooms} Bed | {apartment && apartment.bathrooms} Bath</p>
            <p>{apartment && apartment.pets}</p>
            <br/>
            <Link to={`/apartmentedit/${apartment && apartment.id}`}><Button color="success">Edit Apartment</Button></Link>
            <Link to="/apartmentindex"><Button onClick={ () => deleteApartment(apartment.id) } color="danger">Delete Apartment</Button></Link>
            <Link to="/apartmentindex"><Button color="primary">Back to Apartment</Button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ApartmentShow