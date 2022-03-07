import "./App.css"
import "./components/Board"
import "./styles/playGround.css"

import Tablero from "./components/Board"


function App() {
  return (
    <div className="App">
      <div className="PlayGround">
        <Tablero></Tablero>
      </div>
    </div>
  )
}

export default App
