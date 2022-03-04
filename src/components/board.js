import emojis from "../services/tokens/emojis"
// import characters from "../services/tokens/characters" // Characters for use in memory game
import shuffle from "../utilities/shuffleList"
import "../styles/board.css"
import { useState, useEffect } from "react"
import "../styles/grid.css"
import Grid from "./Grid"
import Moves from "./Moves"

const grid_positions = shuffle([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
])

const arr = Array(16).fill(0) // 0 means: not fliped, 1 means: fliped, 2 means: fliped and yellow

export default function Tablero() {
  const [fliped, setFliped] = useState([])
  const [counter, setCounter] = useState(0)
  const [reset, setReset] = useState(false)
  const [turn, setTurn] = useState(false)
  const play = (card) => {
    setFliped(() => [...fliped, card])
    arr[card] = 1
    setCounter(() => counter + 1)
  }

  const gamePlay = () => {
    if (fliped.length === 2) {
      if (emojis()[fliped[0]] !== emojis()[fliped[1]]) {
        arr[fliped[0]] = 2
        arr[fliped[1]] = 2
      }
    } else if (fliped.length === 3) {
      if (emojis()[fliped[0]] === emojis()[fliped[1]]) {
        arr[fliped[0]] = 1
        arr[fliped[1]] = 1
      } else {
        arr[fliped[0]] = 0
        arr[fliped[1]] = 0
      }
      setFliped([fliped[2]])
    }
    console.log(arr)
  }

  gamePlay()
  useEffect(() => {
    if (fliped.length === 2) {
      setTurn(true)
      setTimeout(() => {
        setReset(true)
      }, 2000)
    }
  }, [reset, fliped])

  return (
    <div>
      <div className="board">
        {grid_positions.map((n) => {
          return arr[n] === 1 ? (
            <div key={n}>
              <Grid
                content={emojis()[n]}
                classNames={"front animationBack"}
              ></Grid>
            </div>
          ) : reset && arr[n] === 2 ? (
            <div key={n} onClick={() => play(n)}>
              <Grid content={""} classNames={"grid backGr"}></Grid>
            </div>
          ) : arr[n] === 2 ? (
            <div key={n}>
              <Grid
                content={emojis()[n]}
                classNames={"front animationBack"}
              ></Grid>
            </div>
          ) : turn ? (
            <div key={n}>
              <Grid content={""} classNames={"grid backGr"}></Grid>
            </div>
          ) : (
            <div key={n} onClick={() => play(n)}>
              <Grid content={""} classNames={"grid backGr"}></Grid>
            </div>
          )
        })}
      </div>
      <div>
        <Moves moves={counter}></Moves>
      </div>
    </div>
  )
}
