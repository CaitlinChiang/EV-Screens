import DemoDriverMain from './components/demonstration/driver-main'
import DemoDriverSecondary from './components/demonstration/driver-secondary'
import DemoDriverTertiary from './components/demonstration/driver-tertiary'
import DemoPassengerMain from './components/demonstration/passenger-main'
import RaceDriverMain from './components/race/driver-main'
import './App.css'
import './styles/Global.css'

function App() {
  return (
    <div className="App">
      <div id="content">
        <DemoDriverMain />
        <DemoDriverSecondary />
        <DemoDriverTertiary />
        <DemoPassengerMain />
        <RaceDriverMain />
      </div>
    </div>
  )
}

export default App
