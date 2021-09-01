import React, { Component } from "react";
import eyes404 from "../assets/404-Page.gif";

class NotFound extends Component {
  render () {
    return (
      <div className="not-found-image">
        <img src={eyes404} alt="404 eyes"/>
      </div>
    );
  }
}

export default NotFound