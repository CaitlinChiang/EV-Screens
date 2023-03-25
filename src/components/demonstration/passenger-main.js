import React, { Component } from 'react'
import '../../styles/PassengerMain.css'

class PassengerMain extends Component {
  render() {
    const delta_front = 5.432
    const delta_back = 1.346
    const laps_remaining = 10
    const current_sector_time = "3:55.104"
    const current_lap_time = "1:36.373"
    const laps = ['11', '10', '09', '08', '07', '06', '05', '04']
    const instructions = '500M TURN RIGHT'

    return (
      <div id="passenger-main">
        <div class="passenger-main-item">
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

        <div class="passenger-main-item">
          <p class="laps-remaining-passenger">LAPS <br /> REMAINING</p>
        
          <div class="laps-remaining-value">
            <p>{laps_remaining}</p>
          </div>

          <div class="map-image-passenger">
            <img alt="map" src="assets/map.jpg" width="220" height="130" />
          </div>

          <div class="delta-front-passenger">
            <div class="delta-grid-passenger">
              <div class="delta-grid-item-passenger">
                <div class="triangle-passenger" />
              </div>
              <div class="delta-grid-item-passenger">
                <p>FRONT {delta_front}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="passenger-main-item">
          <p class="sector-time-passenger">SECTOR TIME</p>
          <p class="sector-time-value-passenger">{current_sector_time}</p>

          <p class="instructions">{instructions}</p>

          <div class="delta-back-passenger">
            <div class="delta-grid-passenger">
              <div class="delta-grid-item-passenger">
                <div class="triangle-passenger" />
              </div>
              <div class="delta-grid-item-passenger">
                <p>BACK {delta_back}</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default PassengerMain
