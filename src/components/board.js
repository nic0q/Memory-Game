import shufflePositions from "../utilities/shuffleList"
import { signs } from "../services/tokens/characters"
import { emojis } from "../services/tokens/emojis" // Characters for use in memory game
import { useState, useEffect } from "react"
import "../styles/buttons.css"
import "../styles/board.css"
import "../styles/grid.css"
import Button from "./Button"
import Score from "./Score"
import Timer from "./Timer"
import Grid from "./Grid"

let grid_positions = shufflePositions()
const arr = Array(16).fill(0) // 0 means: not fliped, 1 means: fliped
let characters = [] // Characters array for symbols in memory game

export default function Board({ tokens }) {
  tokens === 1 ? (characters = emojis) : (characters = signs)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const [cardsFliped, setCardsFliped] = useState([])
  const [standBy, setStandBy] = useState(false)
  const [moves, setMoves] = useState(0)
  const [reset, setReset] = useState(false)

  const play = (id) => {
    if (!play1) {
      setPlay1(true)
    } else {
      setPlay2(true)
      setStandBy(true)
      setMoves(() => moves + 1)
    }
    arr[id] = 1
    setCardsFliped([...cardsFliped, id])
  }
  const resetTurn = () => {
    setPlay1(false)
    setPlay2(false)
    setStandBy(false)
    setCardsFliped([])
    setReset(true)
  }
  useEffect(() => {
    if (play1 && play2) {
      if (characters[cardsFliped[0]] === characters[cardsFliped[1]]) {
        arr[cardsFliped[0]] = 1
        arr[cardsFliped[1]] = 1
        resetTurn()
      } else {
        arr[cardsFliped[0]] = 0
        arr[cardsFliped[1]] = 0
        setTimeout(() => {
          resetTurn()
        }, 1000)
      }
    }
  }, [play1, play2, cardsFliped])

  const restart = () => {
    resetTurn()
    setMoves(0)
    arr.fill(0)
    grid_positions = shufflePositions()
  }
  return (
    <div className="play">
      <div className="buttons">
        <div onClick={restart}>
          <Button name="Restart" styles="restart"></Button>
        </div>
        <Button name="New Game" onClick={restart} styles="newGame"></Button>
      </div>
      <Timer resetTime={reset}></Timer>
      <div className="board">
        {grid_positions.map((n) => {
          return arr[n] === 1 ? (
            <div key={n}>
              <Grid
                content={characters[n]}
                classNames={"grid green animationBack"}
              ></Grid>
            </div>
          ) : !standBy ? (
            <div key={n} onClick={() => play(n)}>
              <Grid classNames={"grid hover "}></Grid>
            </div>
          ) : (
            <div key={n}>
              <Grid classNames={"grid"}></Grid>
            </div>
          )
        })}
      </div>
      <Score moves={moves}></Score>
      <br></br>
    </div>
  )
}
