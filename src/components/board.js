import emojis from "../services/tokens/emojis"
// import characters from "../services/tokens/characters" // Characters for use in memory game
import shuffle from "../utilities/shuffleList"
import "../styles/board.css"
import { useState, useEffect } from "react"
import "../styles/grid.css"
import Grid from "./Grid"
import Options from "./Options"
import Title from "./Title"

const grid_positions = shuffle([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
])

const arr = Array(16).fill(0) // 0 means: not fliped, 1 means: fliped, 2 means: fliped and yellow

export default function Tablero() {
  const [fliped, setFliped] = useState([])
  const [counter, setCounter] = useState(0)
  const [reset, setReset] = useState(fliped.length !== 1 ? false : true)
  const [time, setTime] = useState(fliped.length !== 1 ? false : true)

  const play = (card) => {
    setFliped(() => [...fliped, card])
    if (fliped.length === 1) {
      setReset(true)
    } else {
      setReset(false)
      setTime(false)
    }
    arr[card] = 1
    setCounter(() => counter + 1)
  }
  const gamePlay = () => {
    console.log(arr)
    if (fliped.length === 2) {
      if (emojis()[fliped[0]] !== emojis()[fliped[1]]) {
        arr[fliped[0]] = 2
        arr[fliped[1]] = 2
        console.log("bad idea")
      }
    } else if (fliped.length === 3) {
      if (emojis()[fliped[0]] === emojis()[fliped[1]]) {
        setReset(false)
        arr[fliped[0]] = 1
        arr[fliped[1]] = 1
      } else {
        arr[fliped[0]] = 0
        arr[fliped[1]] = 0
      }
      setFliped([fliped[2]])
    }
  }

  gamePlay()
  useEffect(() => {
    if (reset) {
      setTimeout(() => {
        setTime(true)
        console.log("ABN")
      }, 2000)
      setTime(false)
    }
  }, [reset])

  return (
    <div className="play">
      <Title></Title>
      <div className="board">
        {grid_positions.map((n) => {
          return arr[n] === 1 ? (
            <div key={n}>
              <Grid
                content={emojis()[n]}
                classNames={"front animationBack"}
              ></Grid>
            </div>
          ) : time ? (
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
          ) : (
            <div key={n} onClick={() => play(n)}>
              <Grid content={""} classNames={"grid backGr"}></Grid>
            </div>
          )
        })}
        <Options counter={counter}></Options>
      </div>
    </div>
  )
}
