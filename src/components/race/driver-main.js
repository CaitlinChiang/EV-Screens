import React, { Component } from 'react'
import '../../styles/RaceDriverMain.css'

class DriverMain extends Component {
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
      <div id="driver-main-race">
        <div class="acceleration-bar">
          <div class="acceleration-value" />
        </div>
        
        <div class="icons">
          <div class="icon-item-sun">
            <img alt="map" src="assets/sun.png" height="30" />
          </div>
          <div class="icon-item-moon">
            <img alt="map" src="assets/moon.png" height="30" />
          </div>
        </div>

        <div class="speed-actions">
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

        <div class="modes">
          <p>RACE</p>
          <p>DEMONSTRATION</p>
          <p>STATIC</p>
        </div>

        <div class="race-speed">
          <p>{speed}</p>
          <p>kph</p>
          <div class="speed-details">
            <p>{'4 / 57'}</p>
            <p>{'POB'}</p>
            <p>{'BM -1.0'}</p>
          </div>
          <p class="speed-extra">{'BB 57.0'}</p>
        </div>

        <div class="wheel wheel-one">
          <p>{tire_temperatures?.[0]}</p>
          <p>{tire_pressures?.[0]}</p>
        </div>
        <div class="break-temp-race-one">
          <p>{break_temperatures?.[0]}</p>
        </div>
        <div class="wheel-horizontal wheel-horizontal-one" />
        <div class="wheel-vertical wheel-vertical-one" />
        <div class="wheel-long-horizontal wheel-long-horizontal-one">
          <div class="horizontal-line-text horizontal-line-text-one">{break_details?.[0]}</div>
        </div>

        <div class="wheel wheel-three">
          <p>{tire_temperatures?.[2]}</p>
          <p>{tire_pressures?.[2]}</p>
        </div>
        <div class="break-temp-race-three">
          <p>{break_temperatures?.[2]}</p>
        </div>
        <div class="wheel-horizontal wheel-horizontal-three" />
        <div class="wheel-vertical wheel-vertical-three" />
        <div class="wheel-long-horizontal wheel-long-horizontal-three">
          <div class="horizontal-line-text horizontal-line-text-three">{break_details?.[2]}</div>
        </div>

        <div class="center-bar">
          <div class="center-bar-value">
            <p>{battery_percentage}%</p>
            <div class="center-piece-cap" />
            <div class="center-piece">
              <p>{battery_temperature}</p>
            </div>
            <p>{current_lap_time}</p>
          </div>
        </div>

        <div class='water'>
          <div class="water-value">
            <p>WATER</p>
          </div>
        </div>

        <div class="delta-values">
          <div class="delta-boost delta-boost-one" />
          <div class="delta-boost delta-boost-two" />
          <div class="delta-boost delta-boost-three" />

          <p class="delta-front-val">-{delta_back}</p>
          <p class="delta-back-val">+{delta_front}</p>

          <div class="delta-boost delta-boost-four" />
          <div class="delta-boost delta-boost-five" />
          <div class="delta-boost delta-boost-six" />
        </div>

        <div class="lap-details-race">
          <div class="lap-details-item">
            <p class="lap-details-first">{'1:45.218'}</p>
          </div>
          <div class="lap-details-item">
            <div>
              <p>LAST</p>
            </div>
          </div>
          <div class="lap-details-item">
            <p class="lap-details-second">{'1:44.534'}</p>
          </div>
          <div class="lap-details-item">
            <div>
              <p>BEST</p>
            </div>
          </div>
          <div class="lap-details-item">
            <p class="lap-details-last">{'1:42.812'}</p>
          </div>
          <div class="lap-details-item">
            <div>
              <p>FASTEST</p>
            </div>
          </div>
        </div>

        <div class="sector-timings-race">
          <div class="sector-timing-headers">
            <p>S1</p>
          </div>
          <div class="sector-timing-values">
            {sector_timings?.s1.map((e) => {
              return <p>{e}</p>
            })}
          </div>

          <div class="sector-timing-headers">
            <p>S2</p>
          </div>
          <div class="sector-timing-values">
            {sector_timings?.s2?.map((e) => {
              return <p>{e}</p>
            })}
          </div>

          <div class="sector-timing-headers">
            <p>S3</p>
          </div>
          <div class="sector-timing-values">
            {sector_timings?.s3?.map((e) => {
              return <p>{e}</p>
            })}
          </div>
        </div>

        <div class="wheel wheel-two">
          <p>{tire_temperatures?.[1]}</p>
          <p>{tire_pressures?.[1]}</p>
        </div>
        <div class="break-temp-race-two">
          <p>{break_temperatures?.[1]}</p>
        </div>
        <div class="wheel-horizontal wheel-horizontal-two" />
        <div class="wheel-vertical wheel-vertical-two" />
        <div class="wheel-long-horizontal wheel-long-horizontal-two">
          <div class="horizontal-line-text horizontal-line-text-two">{break_details?.[1]}</div>
        </div>

        <div class="wheel wheel-four">
          <p>{tire_temperatures?.[3]}</p>
          <p>{tire_pressures?.[3]}</p>
        </div>
        <div class="break-temp-race-four">
          <p>{break_temperatures?.[3]}</p>
        </div>
        <div class="wheel-horizontal wheel-horizontal-four" />
        <div class="wheel-vertical wheel-vertical-four" />
        <div class="wheel-long-horizontal wheel-long-horizontal-four">
          <div class="horizontal-line-text horizontal-line-text-four">{break_details?.[3]}</div>
        </div>

        <div class="camera-driver-race">
          <p>Camera View</p>
        </div>
      </div> 
    )
  }
}

export default DriverMain
