import DriverMain from './components/demonstration/driver-main'
import DriverSecondary from './components/demonstration/driver-secondary'
import DriverTertiary from './components/demonstration/driver-tertiary'
import PassengerMain from './components/demonstration/passenger-main'
import './App.css'
import './styles/Global.css'

function App() {
  return (
    <div className="App">
      <div id="content">
        <DriverMain />
        <DriverSecondary />
        <DriverTertiary />
        <PassengerMain />
      </div>
    </div>
  )
}

export default App
