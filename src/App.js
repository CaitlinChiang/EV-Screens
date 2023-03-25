import DriverMain from './components/demonstration/driver-main'
import DriverTertiary from './components/demonstration/driver-tertiary'
import './App.css'
import './styles/Global.css'

function App() {
  return (
    <div className="App">
      <div id="content">
        <DriverMain />
        <DriverTertiary />
      </div>
    </div>
  )
}

export default App
