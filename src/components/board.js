import emojis from "../services/tokens/emojis"
// import characters from "../services/tokens/characters" // Characters for use in memory game
import shuffle from "../utilities/shuffleList"
import "../styles/board.css"
import { useState, useEffect } from "react"
import "../styles/grid.css"

const grid_positions = shuffle([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
])

const Grid = ({ classNames, content }) => {
  return <div className={classNames}>{content}</div>
}
const arr = Array(16).fill(0)
export default function Tablero() {
  const [fliped, setFliped] = useState([])
  const [reset, setReset] = useState(false)

  console.log(grid_positions)

  const play = (card) => {
    setReset(false)
    setFliped(() => [...fliped, card])
    arr[card] = 1
  }
  if (fliped.length === 2) {
    if (emojis()[fliped[0]] === emojis()[fliped[1]]) {
      console.log("correct")
    } else {
      console.log("inco")
      arr[fliped[0]] = 0
      arr[fliped[1]] = 0
      arr[fliped[2]] = 0
    }
    setFliped([])
    setReset(true)
  }
  console.log(fliped)
  return (
    <div className="board">
      {grid_positions.map((n) => {
        return arr[n] === 1 ? (
          <div key={n} onClick={() => play(n)}>
            <Grid
              content={emojis()[n]}
              // reset={reset}
              classNames={"grid animationBack"}
            ></Grid>
          </div>
        ) : (
          <div key={n} onClick={() => play(n)}>
            <Grid
              content={""}
              // reset={reset}
              classNames={"grid"}
            ></Grid>
          </div>
        )
      })}
    </div>
  )
}
