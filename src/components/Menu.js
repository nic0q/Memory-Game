import { useState } from "react"
import PlayGround from "../components/PlayGround"
import "../styles/menu.css"
import Button from "./Button"

export default function Menu() {
  const [styles, setstyles] = useState(1)
  const [gridSize, setgridSize] = useState(8)
  const [start, setStart] = useState(false)
  const handleClick = (key) => {
    setstyles(key)
  }
  const handleClickGrid = (key) => {
    setgridSize(key)
  }
  const startGame = () => {
    setStart(true)
  }
  return start ? (
    <PlayGround tokens={styles} gridSize={gridSize}></PlayGround>
  ) : (
    <div className="menu">
      <h6 className="option1">Select Theme</h6>

      <div className="symbols">
        <div>
          {styles === 1 ? (
            <div>
              <button key={1} className="active" onClick={() => handleClick(1)}>
                emojis
              </button>
              <button key={0} className="option" onClick={() => handleClick(0)}>
                characters
              </button>
            </div>
          ) : styles === 0 ? (
            <div>
              <button key={1} className="option" onClick={() => handleClick(1)}>
                emojis
              </button>
              <button key={0} onClick={() => handleClick(0)} className="active">
                characters
              </button>
            </div>
          ) : (
            <div>
              <button key={1} className="option" onClick={() => handleClick(1)}>
                emojis
              </button>
              <button key={0} className="option" onClick={() => handleClick(0)}>
                characters
              </button>
            </div>
          )}
        </div>
      </div>
      <h6 className="option2">Select Grid</h6>
      <div className="symbols">
        <div>
          {gridSize === 8 ? (
            <div>
              <button
                key={1}
                className="active"
                onClick={() => handleClickGrid(8)}
              >
                4 x 4
              </button>
              <button
                key={2}
                className="option"
                onClick={() => handleClickGrid(18)}
              >
                6 x 6
              </button>
            </div>
          ) : gridSize === 18 ? (
            <div>
              <button
                key={1}
                className="option"
                onClick={() => handleClickGrid(8)}
              >
                4 x 4
              </button>
              <button
                key={2}
                onClick={() => handleClickGrid(18)}
                className="active"
              >
                6 x 6
              </button>
            </div>
          ) : (
            <div>
              <button
                key={1}
                className="option"
                onClick={() => handleClickGrid(8)}
              >
                4 x 4
              </button>
              <button
                key={2}
                className="option"
                onClick={() => handleClickGrid(18)}
              >
                6 x 6
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
