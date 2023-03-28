import React, { Component } from 'react'
import '../styles/Controls.css'

class Controls extends Component {
  render() {
    return (
      <div id="controls">
        <form>
          <div class="user-box">
            <input 
              type="text" 
              onChange={(event) => this.props.onSpeed(event.target.value)}
            />
            <label>Speed</label>
          </div>
          <div class="user-box">
            <input 
              type="text" 
              onChange={(event) => this.props.onBattery(event.target.value)}
            />
            <label>Battery Percentage</label>
          </div>
          <div class="user-box">
            <input 
              type="text" 
              onChange={(event) => this.props.onBatteryTemp(event.target.value)}
            />
            <label>Battery Temperature</label>
          </div>
          <div class="user-box">
            <input 
              type="text" 
              onChange={(event) => this.props.onDirection(event.target.value)}
            />
            <label>Direction</label>
          </div>
          <div class="user-box">
            <input 
              type="text" 
              onChange={(event) => this.props.onDeltaFront(event.target.value)}
            />
            <label>Delta Front</label>
          </div>
          <div class="user-box">
            <input 
              type="text" 
              onChange={(event) => this.props.onDeltaBack(event.target.value)}
            />
            <label>Delta Back</label>
          </div>
          <div class="user-box">
            <input 
              type="text" 
              onChange={(event) => this.props.onLapTime(event.target.value)}
            />
            <label>Current Lap Time</label>
          </div>
          <div class="user-box">
            <input 
              type="text" 
              onChange={(event) => this.props.onLapsRemaining(event.target.value)}
            />
            <label>Laps Remaining</label>
          </div>
          <div class="user-box">
            <input 
              type="text" 
              onChange={(event) => this.props.onSectorTime(event.target.value)}
            />
            <label>Current Sector Time</label>
          </div>
          <div class="user-box">
            <input 
              type="text" 
              onChange={(event) => this.props.onTimeLeft(event.target.value)}
            />
            <label>Time Left for Battery</label>
          </div>
          <div class="user-box">
            <input 
              type="text" 
              onChange={(event) => this.props.onInstructions(event.target.value)}
            />
            <label>Map Directions</label>
          </div>
        </form>
      </div>
    )
  }
}

export default Controls
