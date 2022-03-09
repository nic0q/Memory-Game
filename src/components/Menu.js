import { useState } from "react"
import PlayGround from "../components/PlayGround"
import "../styles/menu.css"
import Button from "./Button"

export default function Menu() {
  const [active, setActive] = useState(1)
  const [start, setStart] = useState(false)
  const handleClick = (key) => {
    setActive(key)
  }
  const startGame = () => {
    setStart(true)
  }
  return start ? (
    active === 1 ? (
      <PlayGround tokens={1}></PlayGround>
    ) : active === 2 ? (
      <PlayGround tokens={0}></PlayGround>
    ) : (
      <p>Select a symbol to play</p>
    )
  ) : (
    <div className="menu">
      <h6>Choose One Style</h6>
      <div className="symbols">
        <div>
          {active === 1 ? (
            <div>
              <button key={1} className="active" onClick={() => handleClick(1)}>
                emojis
              </button>
              <button key={2} className="option" onClick={() => handleClick(2)}>
                characters
              </button>
            </div>
          ) : active === 2 ? (
            <div>
              <button key={1} className="option" onClick={() => handleClick(1)}>
                emojis
              </button>
              <button key={2} onClick={() => handleClick(2)} className="active">
                characters
              </button>
            </div>
          ) : (
            <div>
              <button key={1} className="option" onClick={() => handleClick(1)}>
                emojis
              </button>
              <button key={2} className="option" onClick={() => handleClick(2)}>
                characters
              </button>
            </div>
          )}
        </div>
      </div>
      <div onClick={startGame}>
        <Button name="Start Game" styles="restart"></Button>
      </div>
    </div>
  )
}
