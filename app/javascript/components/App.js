import React, { Component } from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from "./pages/Home"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentEdit from "./pages/ApartmentEdit"
import NotFound from "./pages/NotFound"
import apartments from "./mockApartments"

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: apartments
    }
  }

  render () {
    // console.log(this.state.apartments)
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <Header 
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/apartmentindex" render={(props) => <ApartmentIndex apartments={this.state.apartments} />} />
          <Route path="/apartmentshow/:id" render={(props) => {
            console.log(props.match)
            console.log(props.match.params.id)
            const id = props.match.params.id
            const apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <ApartmentShow apartment={apartment} />
          }} />
          <Route path="/apartmentnew" component={ApartmentNew} />
          <Route path="/apartmentedit" component={ApartmentEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App
