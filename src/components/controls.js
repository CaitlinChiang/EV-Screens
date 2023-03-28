import React, { Component } from 'react'
import '../styles/Controls.css'

class Controls extends Component {
  render() {
    return (
      <div id="controls">
        <form>
          <div class="user-box">
            <input type="text" onchange="this.props.onSpeed(this.value)" />
            <label>Speed</label>
          </div>
          <div class="user-box">
            <input type="text" onchange="this.props.onBattery(this.value)" />
            <label>Battery Percentage</label>
          </div>
        </form>
      </div>
    )
  }
}

export default Controls
