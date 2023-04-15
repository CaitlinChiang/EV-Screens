import React, { Component } from 'react'
import '../styles/Camera.css'

class FrontCamera extends Component {
  render() {
    return (
      <div id="front-camera">
        <img src="http://localhost:4000/stream.mjpg" />
      </div> 
    )
  }
}

export default FrontCamera
