import React, { Component } from 'react'
import '../../styles/DriverMain.css'

class DriverMain extends Component {
  render() {
    const delta_front = 5.432
    const delta_back = 1.346
    const battery_percentage = 100
    const current_lap_time = "1:36.373"
    const current_sector_time = "3:55.104"
    const direction = 'N'
    const speed = 78
    const tire_temperatures = [100, 200, 190, 180]
    const tire_pressures = [1.1, 1.2, 1.3, 1.4]

    return (
      <div id="driver-main">
        <div class="driver-main-item">
          <div class="delta-front">
            <div class="delta-grid">
              <div class="delta-grid-item">
                <div class="triangle" />
              </div>
              <div class="delta-grid-item">
                <p>{delta_front}</p>
              </div>
            </div>
          </div>

          <div class="battery">
            <div class="battery-inner">
              <p>{battery_percentage}%</p>
            </div>
            <div class="battery-cap" />
          </div>

          <div class="lap-sector">
            <div class="lap-sector-item">LAP</div>
            <div class="lap-sector-item"><span class="lap-data">{current_lap_time}</span></div>
            <div class="lap-sector-item">SECTOR</div>
            <div class="lap-sector-item"><span class="sector-data">{current_sector_time}</span></div>
          </div>

          <div class="delta-back">
            <div class="delta-grid">
              <div class="delta-grid-item">
                <div class="triangle" />
              </div>
              <div class="delta-grid-item">
                <p>{delta_back}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="driver-main-item">
          <div class="speed-outer">
            <div class="speed-gradient">
              <div class="speed-inner">
                <p>{direction}</p>
                <p>{speed}</p>
                <p>KMH</p>
              </div>
            </div>
          </div>
        </div>

        <div class="driver-main-item">
          <div class="wheel-pressure-main">
            <div class="wheel-main">
              <p>{tire_temperatures?.[0]}</p>
              <p>{tire_pressures?.[0]}</p>
              {tire_temperatures?.[0] > 195 ?
                <div class="wheel-connector-main-left-warning" />
              :
                <div class="wheel-connector-main-left-normal" />
              }
            </div>
            
            <div class="wheel-main">
              <p>{tire_temperatures?.[1]}</p>
              <p>{tire_pressures?.[1]}</p>
              {tire_temperatures?.[1] > 195 ?
                <div class="wheel-connector-main-right-warning" />
              :
                <div class="wheel-connector-main-right-normal" />
              }
            </div>

            <div class="wheel-main">
              <p>{tire_temperatures?.[2]}</p>
              <p>{tire_pressures?.[2]}</p>
              {tire_temperatures?.[2] > 195 ?
                <div class="wheel-connector-main-left-warning" />
              :
                <div class="wheel-connector-main-left-normal" />
              }
            </div>

            <div class="wheel-main">
              <p>{tire_temperatures?.[3]}</p>
              <p>{tire_pressures?.[3]}</p>
              {tire_temperatures?.[3] > 195 ?
                <div class="wheel-connector-main-right-warning" />
              :
                <div class="wheel-connector-main-right-normal" />
              }
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default DriverMain
