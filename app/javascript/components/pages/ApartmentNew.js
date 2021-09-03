import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {Redirect} from 'react-router-dom'


class ApartmentNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        street: "",
        city: "", 
        state: "", 
        manager: "", 
        email: "", 
        price: "", 
        bedrooms: "", 
        bathrooms: "", 
        pets: ""
      },
      submitted: false
    }
  }

  handleChange = (e) =>{
    let {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.props.createApartment(this.state.form)
    this.setState({submitted: true})
  }

  render () {
    return (
      <div className="page container">
        <h3 className="text-center">Create an Apartment</h3>
        <Form>
        <br/>
          <FormGroup>
            <Label for="street">Street</Label>
            <Input 
              type="text" 
              name="street"
              onChange={this.handleChange} 
              value={this.state.form.street}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="city">City</Label>
            <Input 
              type="text" 
              name="city"
              onChange={this.handleChange} 
              value={this.state.form.city}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="state">State</Label>
            <Input 
              type="text" 
              name="state"
              onChange={this.handleChange} 
              value={this.state.form.state}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="manager">Manager</Label>
            <Input 
              type="text" 
              name="manager"
              onChange={this.handleChange} 
              value={this.state.form.manager}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input 
              type="text" 
              name="email"
              onChange={this.handleChange} 
              value={this.state.form.email}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input 
              type="text" 
              name="price"
              onChange={this.handleChange} 
              value={this.state.form.price}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="bedrooms">Bedrooms</Label>
            <Input 
              type="number" 
              name="bedrooms"
              onChange={this.handleChange} 
              value={this.state.form.bedrooms}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="bathrooms">Bathrooms</Label>
            <Input 
              type="number" 
              name="bathrooms"
              onChange={this.handleChange} 
              value={this.state.form.bathrooms}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="pets">Pets</Label>
            <Input 
              type="text" 
              name="pets"
              onChange={this.handleChange} 
              value={this.state.form.pets}
            />
          </FormGroup>
          <br/>
          <Button name="submit" color="primary" onClick={this.handleSubmit}>Create new Apartment</Button>
        </Form>
        {this.state.submitted && <Redirect to="/apartmentindex"/>}
      </div>
    );
  }
}

export default ApartmentNew