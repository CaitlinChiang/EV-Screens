import React, { Component } from 'react'
import DemoPassengerMain from './components/demonstration/passenger-main'
import Controls from './components/controls'
import './App.css'
import './styles/Global.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      speed: 78,
      battery: 100,
      batteryTemp: 70,
      deltaFront: 5.432,
      deltaBack: 1.346,
      lapTime: "1:36.373",
      sectorTime: "3:55.104",
      direction: "N",
      lapsRemaining: 10,
      timeLeft: '1HR 50MINS',
      instructions: '500M TURN RIGHT',
      tire_temperatures_first: 110,
      tire_temperatures_second: 110,
      tire_temperatures_third: 100,
      tire_temperatures_fourth: 120,
      tire_pressures_first: 1.1,
      tire_pressures_second: 1.2,
      tire_pressures_third: 1.3,
      tire_pressures_fourth: 1.4,
      break_temperatures_first: 500,
      break_temperatures_second: 600,
      break_temperatures_third: 300,
      break_temperatures_fourth: 500
    }

    this.onSpeed = this.onSpeed.bind(this)
    this.onBattery = this.onBattery.bind(this)
    this.onDeltaFront = this.onDeltaFront.bind(this)
    this.onDeltaBack = this.onDeltaBack.bind(this)
    this.onLapTime = this.onLapTime.bind(this)
    this.onSectorTime = this.onSectorTime.bind(this)
    this.onDirection = this.onDirection.bind(this)
    this.onTirePressuresFirst = this.onTirePressuresFirst.bind(this)
    this.onTirePressuresSecond = this.onTirePressuresSecond.bind(this)
    this.onTirePressuresThird = this.onTirePressuresThird.bind(this)
    this.onTirePressuresFourth = this.onTirePressuresFourth.bind(this)
    this.onTireTemperaturesFirst = this.onTireTemperaturesFirst.bind(this)
    this.onTireTemperaturesSecond = this.onTireTemperaturesSecond.bind(this)
    this.onTireTemperaturesThird = this.onTireTemperaturesThird.bind(this)
    this.onTireTemperaturesFourth = this.onTireTemperaturesFourth.bind(this)
    this.onBreakTemperaturesFirst = this.onBreakTemperaturesFirst.bind(this)
    this.onBreakTemperaturesSecond = this.onBreakTemperaturesSecond.bind(this)
    this.onBreakTemperaturesThird = this.onBreakTemperaturesThird.bind(this)
    this.onBreakTemperaturesFourth = this.onBreakTemperaturesFourth.bind(this)
    this.onLapsRemaining = this.onLapsRemaining.bind(this)
    this.onTimeLeft = this.onTimeLeft.bind(this)
    this.onInstructions = this.onInstructions.bind(this)
    this.onBatteryTemp = this.onBatteryTemp.bind(this)
  }

  onSpeed(newVal) {
    this.setState({ speed: newVal })
  }
  onBattery(newVal) {
    this.setState({ battery: newVal })
  }
  onDeltaFront(newVal) {
    this.setState({ deltaFront: newVal })
  }
  onDeltaBack(newVal) {
    this.setState({ deltaBack: newVal })
  }
  onLapTime(newVal) {
    this.setState({ lapTime: newVal })
  }
  onSectorTime(newVal) {
    this.setState({ sectorTime: newVal })
  }
  onDirection(newVal) {
    this.setState({ direction: newVal })
  }
  onTirePressuresFirst(newVal) {
    this.setState({ tire_pressures_first: newVal })
  }
  onTirePressuresSecond(newVal) {
    this.setState({ tire_pressures_second: newVal })
  }
  onTirePressuresThird(newVal) {
    this.setState({ tire_pressures_third: newVal })
  }
  onTirePressuresFourth(newVal) {
    this.setState({ tire_pressures_fourth: newVal })
  }
  onTireTemperaturesFirst(newVal) {
    this.setState({ tire_temperatures_first: newVal })
  }
  onTireTemperaturesSecond(newVal) {
    this.setState({ tire_temperatures_second: newVal })
  }
  onTireTemperaturesThird(newVal) {
    this.setState({ tire_temperatures_third: newVal })
  }
  onTireTemperaturesFourth(newVal) {
    this.setState({ tire_temperatures_fourth: newVal })
  }
  onBreakTemperaturesFirst(newVal) {
    this.setState({ break_temperatures_first: newVal })
  }
  onBreakTemperaturesSecond(newVal) {
    this.setState({ break_temperatures_second: newVal })
  }
  onBreakTemperaturesThird(newVal) {
    this.setState({ break_temperatures_third: newVal })
  }
  onBreakTemperaturesFourth(newVal) {
    this.setState({ break_temperatures_fourth: newVal })
  }
  onLapsRemaining(newVal) {
    this.setState({ lapsRemaining: newVal })
  }
  onTimeLeft(newVal) {
    this.setState({ timeLeft: newVal })
  }
  onInstructions(newVal) {
    this.setState({ instructions: newVal })
  }
  onBatteryTemp(newVal) {
    this.setState({ batteryTemp: newVal })
  }

  render() {
    const {
      deltaFront,
      deltaBack,
      lapTime,
      sectorTime,
      lapsRemaining,
      instructions
    } = this.state

    return (
      <div className="App">
        <div id="content">
          <Controls
            onSpeed={this.onSpeed}
            onBattery={this.onBattery}
            onBatteryTemp={this.onBatteryTemp}
            onDirection={this.onDirection}
            onDeltaFront={this.onDeltaFront}
            onDeltaBack={this.onDeltaBack}
            onLapTime={this.onLapTime}
            onLapsRemaining={this.onLapsRemaining}
            onSectorTime={this.onSectorTime}
            onTimeLeft={this.onTimeLeft}
            onInstructions={this.onInstructions}
            onTirePressuresFirst={this.onTirePressuresFirst}
            onTirePressuresSecond={this.onTirePressuresSecond}
            onTirePressuresThird={this.onTirePressuresThird}
            onTirePressuresFourth={this.onTirePressuresFourth}
            onTireTemperaturesFirst={this.onTireTemperaturesFirst}
            onTireTemperaturesSecond={this.onTireTemperaturesSecond}
            onTireTemperaturesThird={this.onTireTemperaturesThird}
            onTireTemperaturesFourth={this.onTireTemperaturesFourth}
            onBreakTemperaturesFirst={this.onBreakTemperaturesFirst}
            onBreakTemperaturesSecond={this.onBreakTemperaturesSecond}
            onBreakTemperaturesThird={this.onBreakTemperaturesThird}
            onBreakTemperaturesFourth={this.onBreakTemperaturesFourth}
          />

          <DemoPassengerMain 
            delta_front={deltaFront} 
            delta_back={deltaBack}
            laps_remaining={lapsRemaining}
            current_lap_time={lapTime}
            current_sector_time={sectorTime}
            instructions={instructions}
          />
        </div>
      </div>
    )
  }
}

export default App
