import React, { Component } from 'react'
import '../../styles/RaceDriverMain.css'

class DriverMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videoUrl: null
    }
  }

  componentDidMount() {
    fetch('http://10.15.127.246:5000/video')
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob)
        this.setState({ videoUrl: url })
      })
  }

  render() {
    const {
      delta_front,
      delta_back,
      battery,
      battery_temperature,
      current_lap_time,
      speed,
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

    const { videoUrl } = this.state

    const sector_timings = {
      s1: [38.432, 38.576, 37.954],
      s2: [47.233, 46.523, 46.532],
      s3: [19.553, 19.435, 18.326]
    }
    const break_details = [60, 80, 30, 60]

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
          <p>{tire_temperatures_first}</p>
          <p>{tire_pressures_first}</p>
        </div>
        <div class="break-temp-race-one">
          <p>{break_temperatures_first}</p>
        </div>
        <div class="wheel-horizontal wheel-horizontal-one" />
        <div class="wheel-vertical wheel-vertical-one" />
        <div class="wheel-long-horizontal wheel-long-horizontal-one">
          <div class="horizontal-line-text horizontal-line-text-one">{break_details?.[0]}</div>
        </div>

        <div class="wheel wheel-three">
          <p>{tire_temperatures_third}</p>
          <p>{tire_pressures_third}</p>
        </div>
        <div class="break-temp-race-three">
          <p>{break_temperatures_third}</p>
        </div>
        <div class="wheel-horizontal wheel-horizontal-three" />
        <div class="wheel-vertical wheel-vertical-three" />
        <div class="wheel-long-horizontal wheel-long-horizontal-three">
          <div class="horizontal-line-text horizontal-line-text-three">{break_details?.[2]}</div>
        </div>

        <div class="center-bar">
          <div class="center-bar-value">
            <p>{battery}%</p>
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
          <p>{tire_temperatures_second}</p>
          <p>{tire_pressures_second}</p>
        </div>
        <div class="break-temp-race-two">
          <p>{break_temperatures_second}</p>
        </div>
        <div class="wheel-horizontal wheel-horizontal-two" />
        <div class="wheel-vertical wheel-vertical-two" />
        <div class="wheel-long-horizontal wheel-long-horizontal-two">
          <div class="horizontal-line-text horizontal-line-text-two">{break_details?.[1]}</div>
        </div>

        <div class="wheel wheel-four">
          <p>{tire_temperatures_fourth}</p>
          <p>{tire_pressures_fourth}</p>
        </div>
        <div class="break-temp-race-four">
          <p>{break_temperatures_fourth}</p>
        </div>
        <div class="wheel-horizontal wheel-horizontal-four" />
        <div class="wheel-vertical wheel-vertical-four" />
        <div class="wheel-long-horizontal wheel-long-horizontal-four">
          <div class="horizontal-line-text horizontal-line-text-four">{break_details?.[3]}</div>
        </div>

        <div class="camera-driver-race">
          <p>Camera View</p>
          {videoUrl && (
            <video controls>
              <source src={videoUrl} type="application/x-mpegURL" />
            </video>
          )}
        </div>
      </div> 
    )
  }
}

export default DriverMain
