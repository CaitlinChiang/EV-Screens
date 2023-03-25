import React, { Component } from 'react'
import '../../styles/DriverSecondary.css'

class DriverSecondary extends Component {
  render() {
    const delta_front = 5.432
    const delta_back = 1.346
    const laps_remaining = 10
    const current_sector_time = "3:55.104"
    const current_lap_time = "1:36.373"
    const laps = ['11', '10', '09', '08', '07', '06', '05', '04']

    return (
      <div id="driver-secondary">
        <div class="driver-secondary-item">
          <div class="lap-list">
            <div class="lap-list-item">
              <p>LAP 12</p>
            </div>
            <div class="lap-list-item">
              <p class="current-lap-time">{current_lap_time}</p>
            </div>

            {laps?.map((lap) => {
              return (
                <>
                  <div class="lap-list-item">
                    <p>LAP {lap}</p>
                  </div>
                  <div class="lap-list-item">
                    <p>1:36.373</p>
                  </div>
                </>
              )
            })}
            <div class=" lap-list-item continuation">.....</div>
            <div class=" lap-list-item continuation">.....</div>
          </div>
        </div>

        <div class="driver-secondary-item">
          <p class="laps-remaining">LAPS REMAINING</p>
        
          <div class="laps-gradient">
            <div class="laps-inner">
              <p>{laps_remaining}</p>
            </div>
          </div>

          <p class="sector-time">SECTOR TIME</p>
          <p class="sector-time-value">{current_sector_time}</p>
        </div>

        <div class="driver-secondary-item">
          <div class="delta-front-secondary">
            <div class="delta-grid-secondary">
              <div class="delta-grid-item-secondary">
                <div class="triangle-secondary" />
              </div>
              <div class="delta-grid-item-secondary">
                <p>{delta_front}</p>
              </div>
            </div>
          </div>

          <div class="map-image">
            <img alt="map" src="assets/map.jpg" width="220" height="130" />
          </div>

          <div class="delta-back-secondary">
            <div class="delta-grid-secondary">
              <div class="delta-grid-item-secondary">
                <div class="triangle-secondary" />
              </div>
              <div class="delta-grid-item-secondary">
                <p>{delta_back}</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default DriverSecondary
