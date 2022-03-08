import characters from "../services/tokens/emojis"
// import characters from "../services/tokens/characters" // Characters for use in memory game
import shufflePositions from "../utilities/shuffleList"
import "../styles/board.css"
import "../styles/grid.css"
import "../styles/buttons.css"
import { useState, useEffect } from "react"
import Grid from "./Grid"
import Score from "./Score"
import Button from "./Button"

let grid_positions = shufflePositions()
const arr = Array(16).fill(0) // 0 means: not fliped, 1 means: fliped, 2 means: fliped and yellow

export default function Tablero() {
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const [cardsFliped, setCardsFliped] = useState([])
  const [standBy, setStandBy] = useState(false)
  const [moves, setMoves] = useState(0)

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

  useEffect(() => {
    if (play1 && play2) {
      if (characters()[cardsFliped[0]] === characters()[cardsFliped[1]]) {
        arr[cardsFliped[0]] = 2
        arr[cardsFliped[1]] = 2
        setPlay1(false)
        setPlay2(false)
        setStandBy(false)
        setCardsFliped([])
      } else {
        arr[cardsFliped[0]] = 0
        arr[cardsFliped[1]] = 0
        setTimeout(() => {
          setPlay1(false)
          setPlay2(false)
          setStandBy(false)
          setCardsFliped([])
        }, 1000)
      }
    }
  }, [play1, play2, cardsFliped])

  const restart = () => {
    setPlay1(false)
    setPlay2(false)
    setStandBy(false)
    setCardsFliped([])
    setMoves(0)
    arr.fill(0)
    grid_positions = shufflePositions()
  }
  return (
    <div className="play">
      <div className="buttons">
        <div onClick={restart} ><Button name="Restart" styles="restart"></Button></div>
        <Button name="NewGame" onClick={restart} styles="newGame"></Button>
      </div>
      <br></br>
      <div className="board">
        {grid_positions.map((n) => {
          return arr[n] === 1 || arr[n] === 2 ? ( //
            <div key={n}>
              <Grid
                content={characters()[n]}
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
        <br></br>
        <Score moves={moves}></Score>   
    </div>
  )
}
