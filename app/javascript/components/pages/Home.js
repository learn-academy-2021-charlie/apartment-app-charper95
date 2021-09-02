import React, { Component } from 'react'
import apartment from '../assets/apartment.jpg';

class Home extends Component {
  render() {
    return (
      <div className="page">
        <div style={{ backgroundImage: 'url(' + apartment + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center', display: 'block', minHeight: '618.56px'}}>
          <div className="home-header"><h3 className="text-center">Apartment Home Page</h3></div>
        </div>
      </div>
    )
  }
}

export default Home;