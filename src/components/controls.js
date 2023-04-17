import React, { Component } from 'react'
import '../styles/Controls.css'

class Controls extends Component {
  render() {
    const { values } = this.props

    return (
      <div id="controls">
        <form>
          <div class="input-container-1">
            <div class="user-box">
              <input
                value={values.speed}
                type="number" 
                onChange={(event) => this.props.onSpeed(event.target.value)}
              />
              <label>Speed</label>
            </div>
            <div class="user-box">
              <input 
                value={values.battery}
                type="number" 
                onChange={(event) => this.props.onBattery(event.target.value)}
              />
              <label>Battery Percentage</label>
            </div>
            <div class="user-box">
              <input
                value={values.batteryTemp}
                type="number" 
                onChange={(event) => this.props.onBatteryTemp(event.target.value)}
              />
              <label>Battery Temperature</label>
            </div>
            <div class="user-box">
              <input 
                value={values.direction}
                type="text" 
                onChange={(event) => this.props.onDirection(event.target.value)}
              />
              <label>Direction</label>
            </div>
            <div class="user-box">
              <input 
                value={values.deltaFront}
                type="number" 
                onChange={(event) => this.props.onDeltaFront(event.target.value)}
              />
              <label>Delta Front</label>
            </div>
            <div class="user-box">
              <input
                value={values.deltaBack}
                type="number" 
                onChange={(event) => this.props.onDeltaBack(event.target.value)}
              />
              <label>Delta Back</label>
            </div>
            <div class="user-box">
              <input
                value={values.lapTime}
                type="text" 
                onChange={(event) => this.props.onLapTime(event.target.value)}
              />
              <label>Current Lap Time</label>
            </div>
            <div class="user-box">
              <input
                value={values.sectorTime}
                type="text" 
                onChange={(event) => this.props.onSectorTime(event.target.value)}
              />
              <label>Current Sector Time</label>
            </div>
            <div class="user-box">
              <input
                value={values.timeLeft}
                type="text" 
                onChange={(event) => this.props.onTimeLeft(event.target.value)}
              />
              <label>Time Left for Battery</label>
            </div>
          </div>
          
          <div class="input-container">
            <div class="user-box">
              <input 
                value={values.tire_pressures_first}
                type="number" 
                onChange={(event) => this.props.onTirePressuresFirst(event.target.value)}
              />
              <label>U.L. Tire Pressure</label>
            </div>
            <div class="user-box">
              <input
                value={values.tire_pressures_second}
                type="number" 
                onChange={(event) => this.props.onTirePressuresSecond(event.target.value)}
              />
              <label>U.R. Tire Pressure</label>
            </div>
            <div class="user-box">
              <input 
                value={values.tire_pressures_third}
                type="number" 
                onChange={(event) => this.props.onTirePressuresThird(event.target.value)}
              />
              <label>L.L. Tire Pressure</label>
            </div>
            <div class="user-box">
              <input 
                value={values.tire_pressures_fourth}
                type="text" 
                onChange={(event) => this.props.onTirePressuresFourth(event.target.value)}
              />
              <label>L.R. Tire Pressure</label>
            </div>
            <div class="user-box">
              <input 
                value={values.tire_temperatures_first}
                type="number" 
                onChange={(event) => this.props.onTireTemperaturesFirst(event.target.value)}
              />
              <label>U.L. Tire Temp</label>
            </div>
            <div class="user-box">
              <input 
                value={values.tire_temperatures_second}
                type="number" 
                onChange={(event) => this.props.onTireTemperaturesSecond(event.target.value)}
              />
              <label>U.R. Tire Temp</label>
            </div>
            <div class="user-box">
              <input 
                value={values.tire_temperatures_third}
                type="number" 
                onChange={(event) => this.props.onTireTemperaturesThird(event.target.value)}
              />
              <label>L.L. Tire Temp</label>
            </div>
            <div class="user-box">
              <input 
                value={values.tire_temperatures_fourth}
                type="number" 
                onChange={(event) => this.props.onTireTemperaturesFourth(event.target.value)}
              />
              <label>L.R. Tire Temp</label>
            </div>
            <div class="user-box">
              <input 
                value={values.break_temperatures_first}
                type="number" 
                onChange={(event) => this.props.onBreakTemperaturesFirst(event.target.value)}
              />
              <label>U.L. Break Temp</label>
            </div>
            <div class="user-box">
              <input 
                value={values.break_temperatures_second}
                type="number" 
                onChange={(event) => this.props.onBreakTemperaturesSecond(event.target.value)}
              />
              <label>U.R. Break Temp</label>
            </div>
            <div class="user-box">
              <input
                value={values.break_temperatures_third}
                type="number" 
                onChange={(event) => this.props.onBreakTemperaturesThird(event.target.value)}
              />
              <label>L.L. Break Temp</label>
            </div>
            <div class="user-box">
              <input
                value={values.break_temperatures_fourth}
                type="number" 
                onChange={(event) => this.props.onBreakTemperaturesFourth(event.target.value)}
              />
              <label>L.R. Break Temp</label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Controls
