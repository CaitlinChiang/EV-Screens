import React, { Component } from 'react'
import '../../styles/DriverTertiary.css'

class DriverTertiary extends Component {
  render() {
    const {
      battery,
      direction,
      speed,
      time_left,
      tire_temperatures_first,
      tire_temperatures_second,
      tire_temperatures_third,
      tire_temperatures_fourth,
      tire_pressures_first,
      tire_pressures_second,
      tire_pressures_third,
      tire_pressures_fourth,
      break_temperatures_first,
      break_temperatures_second,
      break_temperatures_third,
      break_temperatures_fourth
    } = this.props

    return (
      <div id="driver-tertiary">
        <div class="driver-tertiary-item">
          <div class="wheel-pressure-tertiary">
            <div class="wheel-tertiary">
              <p>{tire_temperatures_first}</p>
              <p>{tire_pressures_first}</p>
              {break_temperatures_first > 650 ?
                <div class="wheel-connector-tertiary-left-warning" />
              :
                <div class="wheel-connector-tertiary-left-normal" />
              }
              <p class="break-temp-left">{break_temperatures_first}</p>
            </div>
            
            <div class="wheel-tertiary">
              <p>{tire_temperatures_second}</p>
              <p>{tire_pressures_second}</p>
              {break_temperatures_second > 650 ?
                <div class="wheel-connector-tertiary-right-warning" />
              :
                <div class="wheel-connector-tertiary-right-normal" />
              }
              <p class="break-temp-right">{break_temperatures_second}</p>
            </div>

            <div class="wheel-tertiary">
              <p>{tire_temperatures_third}</p>
              <p>{tire_pressures_third}</p>
              {break_temperatures_third > 650 ?
                <div class="wheel-connector-tertiary-left-warning" />
              :
                <div class="wheel-connector-tertiary-left-normal" />
              }
              <p class="break-temp-left">{break_temperatures_third}</p>
            </div>

            <div class="wheel-tertiary">
              <p>{tire_temperatures_fourth}</p>
              <p>{tire_pressures_fourth}</p>
              {break_temperatures_fourth > 650 ?
                <div class="wheel-connector-tertiary-right-warning" />
              :
                <div class="wheel-connector-tertiary-right-normal" />
              }
              <p class="break-temp-right">{break_temperatures_fourth}</p>
            </div>
          </div>
        </div>

        <div class="driver-tertiary-item">
          <div class="speed-outer-tertiary">
            <div class="speed-gradient-tertiary">
              <div class="speed-inner-tertiary">
                <p>{direction}</p>
                <p>{speed}</p>
                <p>KMH</p>
              </div>
            </div>
          </div>

          <div class="battery-tertiary">
            <div class="battery-inner-tertiary">
              <p>{battery}%</p>
              <p>{time_left}</p>
            </div>
            <div class="battery-cap-tertiary" />
          </div>
        </div>
      </div> 
    )
  }
}

export default DriverTertiary
