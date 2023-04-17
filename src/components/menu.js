import React, { Component } from 'react'
import '../styles/Menu.css'

class Navigation extends Component {
  render() {
    const handleChange = (val) => {
      this.props.onMode(val)
    }

    return (
      <nav class="horizontal-menu plain">
        <ul>
          <li onClick={() => handleChange('DEMO_DRIVER_MAIN')}><a href='#'>Demo Driver 01</a></li>
          <li onClick={() => handleChange('DEMO_DRIVER_SECONDARY')}><a href='#'>Demo Driver 02</a></li>
          <li onClick={() => handleChange('DEMO_DRIVER_TERTIARY')}><a href='#'>Demo Driver 03</a></li>
          <li onClick={() => handleChange('DEMO_PASSENGER_MAIN')}><a href='#'>Demo Passenger 01</a></li>
          <li onClick={() => handleChange('DEMO_PASSENGER_SECONDARY')}><a href='#'>Demo Passenger 02</a></li>
          <li onClick={() => handleChange('RACE_DRIVER_MAIN')}><a href='#'>Race Driver</a></li>
          <li onClick={() => handleChange('RACE_PASSENGER_MAIN')}><a href='#'>Race Passenger</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
