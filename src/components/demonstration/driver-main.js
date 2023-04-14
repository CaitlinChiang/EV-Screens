import React, { Component } from 'react'
import '../../styles/DriverMain.css'

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
      current_lap_time,
      current_sector_time,
      direction,
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
              <p>{battery}%</p>
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
              <p>{tire_temperatures_first}</p>
              <p>{tire_pressures_first}</p>
              {break_temperatures_first > 650 ?
                <div class="wheel-connector-main-left-warning" />
              :
                <div class="wheel-connector-main-left-normal" />
              }
            </div>
            
            <div class="wheel-main">
              <p>{tire_temperatures_second}</p>
              <p>{tire_pressures_second}</p>
              {break_temperatures_second > 650 ?
                <div class="wheel-connector-main-right-warning" />
              :
                <div class="wheel-connector-main-right-normal" />
              }
            </div>

            <div class="wheel-main">
              <p>{tire_temperatures_third}</p>
              <p>{tire_pressures_third}</p>
              {break_temperatures_third > 650 ?
                <div class="wheel-connector-main-left-warning" />
              :
                <div class="wheel-connector-main-left-normal" />
              }
            </div>

            <div class="wheel-main">
              <p>{tire_temperatures_fourth}</p>
              <p>{tire_pressures_fourth}</p>
              {break_temperatures_fourth > 650 ?
                <div class="wheel-connector-main-right-warning" />
              :
                <div class="wheel-connector-main-right-normal" />
              }
            </div>
          </div>
        </div>

        <div class="camera-driver-main">
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
