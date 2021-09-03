import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {Redirect} from 'react-router-dom'


class ApartmentEdit extends Component {
  constructor(props) {
    super(props)
    const {apartment} = this.props
    this.state = {
      apartment: {
        street: apartment && apartment.street,
        city: apartment && apartment.city, 
        state: apartment && apartment.state, 
        manager: apartment && apartment.manager, 
        email: apartment && apartment.email, 
        price: apartment && apartment.price, 
        bedrooms: apartment && apartment.bedrooms, 
        bathrooms: apartment && apartment.bathrooms, 
        pets: apartment && apartment.pets
      },
      submitted: false
    }
  }

  handleChange = (e) =>{
    let {apartment} = this.state
    apartment[e.target.name] = e.target.value
    this.setState({apartment: apartment})
  }

  handleSubmit = () => {
    this.props.updateApartment(this.state.apartment, this.props.apartment.id)
    this.setState({submitted: true})
  }

  render () {
    return (
      <div className="page-edit container">
        <h3 className="text-center">Edit an Apartment</h3>
        <Form>
        <br/>
          <FormGroup>
            <Label for="street">Street</Label>
            <Input 
              type="text" 
              name="street"
              onChange={this.handleChange} 
              value={this.state.apartment.street}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="city">City</Label>
            <Input 
              type="text" 
              name="city"
              onChange={this.handleChange} 
              value={this.state.apartment.city}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="state">State</Label>
            <Input 
              type="text" 
              name="state"
              onChange={this.handleChange} 
              value={this.state.apartment.state}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="manager">Manager</Label>
            <Input 
              type="text" 
              name="manager"
              onChange={this.handleChange} 
              value={this.state.apartment.manager}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input 
              type="text" 
              name="email"
              onChange={this.handleChange} 
              value={this.state.apartment.email}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input 
              type="text" 
              name="price"
              onChange={this.handleChange} 
              value={this.state.apartment.price}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="bedrooms">Bedrooms</Label>
            <Input 
              type="integer" 
              name="bedrooms"
              onChange={this.handleChange} 
              value={this.state.apartment.bedrooms}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="bathrooms">Bathrooms</Label>
            <Input 
              type="integer" 
              name="bathrooms"
              onChange={this.handleChange} 
              value={this.state.apartment.bathrooms}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="pets">Pets</Label>
            <Input 
              type="text" 
              name="pets"
              onChange={this.handleChange} 
              value={this.state.apartment.pets}
            />
          </FormGroup>
          <br/>
          <div className="form-button">
          <Button name="submit" color="primary" onClick={this.handleSubmit}>Edit new Apartment</Button>
          </div>
        </Form>
        {this.state.submitted && <Redirect to={`/apartmentshow/${this.props.apartment.id}`}/>}
      </div>
    );
  }
}

export default ApartmentEdit