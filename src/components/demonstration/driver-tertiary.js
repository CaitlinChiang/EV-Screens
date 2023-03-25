import React, { Component } from 'react'
import '../../styles/DriverTertiary.css'

class DriverTertiary extends Component {
  render() {
    const battery_percentage = 100
    const direction = 'N'
    const speed = 78
    const time_left = '1HR 50MINS'
    const tire_temperatures = [100, 200, 190, 180]
    const tire_pressures = [1.1, 1.2, 1.3, 1.4]
    const break_temperatures = [680, 800, 200, 300]

    return (
      <div id="driver-tertiary">
        <div class="driver-tertiary-item">
          <div class="wheel-pressure-tertiary">
            <div class="wheel-tertiary">
              <p>{tire_temperatures?.[0]}</p>
              <p>{tire_pressures?.[0]}</p>
              {break_temperatures?.[0] > 650 ?
                <div class="wheel-connector-tertiary-left-warning" />
              :
                <div class="wheel-connector-tertiary-left-normal" />
              }
              <p class="break-temp-left">{break_temperatures?.[0]}</p>
            </div>
            
            <div class="wheel-tertiary">
              <p>{tire_temperatures?.[1]}</p>
              <p>{tire_pressures?.[1]}</p>
              {break_temperatures?.[1] > 650 ?
                <div class="wheel-connector-tertiary-right-warning" />
              :
                <div class="wheel-connector-tertiary-right-normal" />
              }
              <p class="break-temp-right">{break_temperatures?.[1]}</p>
            </div>

            <div class="wheel-tertiary">
              <p>{tire_temperatures?.[2]}</p>
              <p>{tire_pressures?.[2]}</p>
              {break_temperatures?.[2] > 650 ?
                <div class="wheel-connector-tertiary-left-warning" />
              :
                <div class="wheel-connector-tertiary-left-normal" />
              }
              <p class="break-temp-left">{break_temperatures?.[2]}</p>
            </div>

            <div class="wheel-tertiary">
              <p>{tire_temperatures?.[3]}</p>
              <p>{tire_pressures?.[3]}</p>
              {break_temperatures?.[3] > 650 ?
                <div class="wheel-connector-tertiary-right-warning" />
              :
                <div class="wheel-connector-tertiary-right-normal" />
              }
              <p class="break-temp-right">{break_temperatures?.[3]}</p>
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
              <p>{battery_percentage}%</p>
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
