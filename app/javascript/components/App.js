import React, { Component } from "react"
import Header from './components/Header'
import ApartmentIndex from "./pages/ApartmentIndex"

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render () {
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
          <Route path="/apartmentIndex" component={ApartmentIndex} />
        </Switch>
      </Router>
    );
  }
}

export default App
