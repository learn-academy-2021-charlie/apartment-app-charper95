import React, { Component } from "react"
import { Card, Button, CardTitle, CardGroup } from 'reactstrap';
import {Link} from 'react-router-dom';

class ApartmentIndex extends Component {
  render () {
    return (
      <div className="page">
        <h3 className="text-center">Apartment Index</h3>
        <CardGroup>
          {this.props.apartments && this.props.apartments.map(apartment => {
            return (
              <Card body key={apartment.id}>
                <CardTitle tag="h5">Address: {apartment.street}, {apartment.city}, {apartment.state}</CardTitle>
                <Button color="primary">
                  <Link className="index-button-link" to={`/apartmentshow/${apartment.id}`}>
                      Go to Apartment
                  </Link>
                </Button>
              </Card>
            )
          })}
        </CardGroup>
      </div>
    );
  }
}

export default ApartmentIndex