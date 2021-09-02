import React, { Component } from "react"
import { Card, Button, CardTitle, CardText, CardGroup } from 'reactstrap';

class ApartmentIndex extends Component {
  render () {
    console.log(this.props.apartments)
    return (
      <div className="page">
        <h3 className="text-center">Apartment Index</h3>
        <CardGroup>
          {this.props.apartments && this.props.apartments.map(apartment => {
            return (
              <Card body key={apartment.id}>
                <CardTitle tag="h5">Address: {apartment.street}, {apartment.city}, {apartment.state}</CardTitle>
                <CardText>Manager: {apartment.manager} | Email: {apartment.email} | Price: ${apartment.price} | {apartment.bedrooms} Bed, {apartment.bathrooms} Bath | {apartment.pets}.</CardText>
                <Button>Go to Apartment</Button>
              </Card>
            )
          })}
        </CardGroup>
      </div>
    );
  }
}

export default ApartmentIndex