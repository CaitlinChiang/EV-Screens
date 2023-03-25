import DriverMain from './components/demonstration/driver-main'
import DriverSecondary from './components/demonstration/driver-secondary'
import './App.css'
import './styles/Global.css'

function App() {
  return (
    <div className="App">
      <div id="content">
        <DriverMain />
        <DriverSecondary />
      </div>
    </div>
  )
}

export default App
