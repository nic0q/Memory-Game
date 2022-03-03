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
const arr = Array(16).fill(0) // 0 means: not fliped, 1 means: fliped, 2 means: fliped and yellow

export default function Tablero() {
  const [fliped, setFliped] = useState([])

  console.log(grid_positions)
  const play = (card) => {
    setFliped(() => [...fliped, card])
    arr[card] = 1
  }

  const gamePlay = () => {
    if (fliped.length === 2) {
      if (emojis()[fliped[0]] !== emojis()[fliped[1]]) {
        arr[fliped[0]] = 2
        arr[fliped[1]] = 2
      }
    } else if ( fliped.length === 3) {
      if (arr[fliped[0]] !== 2 && emojis()[fliped[0]] === emojis()[fliped[1]]) {
        arr[fliped[0]] = 1
        arr[fliped[1]] = 1
      } else {
        console.log("inco")
        arr[fliped[0]] = 0
        arr[fliped[1]] = 0
      }
      setFliped([fliped[2]])
    }
  }
  gamePlay()

  return (
    <div className="board">
      {grid_positions.map((n) => {
        return arr[n] === 1 ? (
          <div key={n}>
            <Grid
              content={emojis()[n]}
              classNames={"grid animationBack"}
            ></Grid>
          </div>
        ) : arr[n] === 2 ? (
          <div key={n}>
            <Grid
              content={emojis()[n]}
              classNames={"grid correct animationBack"}
            ></Grid>
          </div>
        ) : (
          <div key={n} onClick={() => play(n)}>
            <Grid content={""} classNames={"grid"}></Grid>
          </div>
        )
      })}
    </div>
  )
}
