import "./App.css"
import "./components/board"
import "./styles/playGround.css"
import Tablero from "./components/board"
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
