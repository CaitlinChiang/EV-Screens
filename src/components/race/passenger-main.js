import React, { Component } from 'react'
import '../../styles/RacePassengerMain.css'

class PassengerMain extends Component {
  render() {
    const delta_front = 5.432
    const delta_back = 1.346
    const battery_percentage = 69
    const current_lap_time = "1:32.03"
    const speed = 188
    const tire_temperatures = [110, 110, 100, 120]
    const tire_pressures = [1.1, 1.2, 1.1, 1.1]
    const break_temperatures = [500, 600, 300, 500]
    const sector_timings = {
      s1: [38.432, 38.576, 37.954],
      s2: [47.233, 46.523, 46.532],
      s3: [19.553, 19.435, 18.326]
    }
    const break_details = [60, 80, 30, 60]
    const battery_temperature = 70

    return (
      <div id="passenger-main-race">
        <div class="acceleration-bar-passenger">
          <div class="acceleration-value-passenger" />
        </div>
        
        <div class="icons-passenger">
          <div class="icon-item-sun-passenger">
            <img alt="map" src="assets/sun.png" height="45" />
          </div>
          <div class="icon-item-moon-passenger">
            <img alt="map" src="assets/moon.png" height="45" />
          </div>
        </div>

        <div class="modes-passenger">
          <p>R</p>
          <p>D</p>
          <p>S</p>
        </div>

        <div class="race-speed-passenger">
          <p>{speed}</p>
          <p>kph</p>
          <div class="speed-details-passenger">
            <p>{'4 / 57'}</p>
            <p>{'POB'}</p>
          </div>
        </div>

        <div class="speed-actions-passenger">
          <div>
            <p>DRS</p>
          </div>
          <div>
            <p>BOOST</p>
          </div>
          <div>
            <p>PIT</p>
          </div>
        </div>

        <div class="wheel-passenger wheel-passenger-one">
          <p>{tire_temperatures?.[0]}</p>
          <p>{tire_pressures?.[0]}</p>
        </div>
        <div class="break-temp-race-passenger-one">
          <p>{break_temperatures?.[0]}</p>
        </div>
        <div class="wheel-passenger-horizontal wheel-passenger-horizontal-one" />
        <div class="wheel-passenger-vertical wheel-passenger-vertical-one" />
        <div class="wheel-passenger-long-horizontal wheel-passenger-long-horizontal-one">
          <div class="horizontal-line-text-passenger horizontal-line-text-passenger-one">{break_details?.[0]}</div>
        </div>
        <div class="connect-to-battery-one" />

        <div class="wheel-passenger wheel-passenger-three">
          <p>{tire_temperatures?.[2]}</p>
          <p>{tire_pressures?.[2]}</p>
        </div>
        <div class="break-temp-race-passenger-three">
          <p>{break_temperatures?.[2]}</p>
        </div>
        <div class="wheel-passenger-horizontal wheel-passenger-horizontal-three" />
        <div class="wheel-passenger-vertical wheel-passenger-vertical-three" />
        <div class="wheel-passenger-long-horizontal wheel-passenger-long-horizontal-three">
          <div class="horizontal-line-text-passenger horizontal-line-text-passenger-three">{break_details?.[2]}</div>
        </div>
        <div class="connect-to-battery-three" />

        <div class="delta-passenger-values">
          <div class="delta-passenger-boost delta-passenger-boost-one" />
          <div class="delta-passenger-boost delta-passenger-boost-two" />
          <div class="delta-passenger-boost delta-passenger-boost-three" />

          <p class="delta-passenger-front-val">-{delta_back}</p>
          <p class="delta-passenger-back-val">+{delta_front}</p>

          <div class="delta-passenger-boost delta-passenger-boost-four" />
          <div class="delta-passenger-boost delta-passenger-boost-five" />
          <div class="delta-passenger-boost delta-passenger-boost-six" />
        </div>

        <div class="center-piece-cap-passenger" />
        <div class="center-piece-passenger">
          <div class="center-piece-temp">
            <p>{battery_temperature}</p>
          </div>
          <div class="center-piece-level">
            <p>{battery_percentage}%</p>
          </div>
        </div>
        <div class='lap-time-passenger'>
          <p>{current_lap_time}</p>
        </div>

        <div class="sector-timing-passenger-race">
          <div class="sector-timing-passenger-headers-first" />
          <div class="sector-timing-header-val">1:45.218</div>
          <div class="sector-timing-header-val">1:44.534</div>
          <div class="sector-timing-header-val">1:42.812</div>

          <div class="sector-timing-passenger-headers-first" />
          <div class="sector-timing-passenger-headers">
            <p>FASTEST</p> 
          </div>
          <div class="sector-timing-passenger-headers">
            <p>BEST</p> 
          </div>
          <div class="sector-timing-passenger-headers">
            <p>LAST</p>  
          </div>

          <div class="sector-timing-passenger-values">
            <p>S1</p>
          </div>
          {sector_timings?.s1.map((e) => {
            return (
              <div class="sector-timing-passenger-values">
                <p>{e}</p>
              </div>
            )
          })}

          <div class="sector-timing-passenger-values">
            <p>S2</p>
          </div>
          {sector_timings?.s2.map((e) => {
            return (
              <div class="sector-timing-passenger-values">
                <p>{e}</p>
              </div>
            )
          })}

          <div class="sector-timing-passenger-values">
            <p>S3</p>
          </div>
          {sector_timings?.s3.map((e) => {
            return (
              <div class="sector-timing-passenger-values">
                <p>{e}</p>
              </div>
            )
          })}
        </div>

        <div class="wheel-passenger wheel-passenger-two">
          <p>{tire_temperatures?.[1]}</p>
          <p>{tire_pressures?.[1]}</p>
        </div>
        <div class="break-temp-race-passenger-two">
          <p>{break_temperatures?.[1]}</p>
        </div>
        <div class="wheel-passenger-horizontal wheel-passenger-horizontal-two" />
        <div class="wheel-passenger-vertical wheel-passenger-vertical-two" />
        <div class="wheel-passenger-long-horizontal wheel-passenger-long-horizontal-two">
          <div class="horizontal-line-text-passenger horizontal-line-text-passenger-two">{break_details?.[1]}</div>
        </div>
        <div class="connect-to-battery-two" />

        <div class="wheel-passenger wheel-passenger-four">
          <p>{tire_temperatures?.[3]}</p>
          <p>{tire_pressures?.[3]}</p>
        </div>
        <div class="break-temp-race-passenger-four">
          <p>{break_temperatures?.[3]}</p>
        </div>
        <div class="wheel-passenger-horizontal wheel-passenger-horizontal-four" />
        <div class="wheel-passenger-vertical wheel-passenger-vertical-four" />
        <div class="wheel-passenger-long-horizontal wheel-passenger-long-horizontal-four">
          <div class="horizontal-line-text-passenger horizontal-line-text-passenger-four">{break_details?.[3]}</div>
        </div>
        <div class="connect-to-battery-four" />

        <div class='water-passenger'>
          <div class="water-passenger-value">
            <p>WATER</p>
          </div>
        </div>
      </div> 
    )
  }
}

export default PassengerMain
