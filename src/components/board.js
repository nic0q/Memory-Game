import Grid from "./grid"
import emojis from "../services/tokens/emojis"
import characters from "../services/tokens/characters" // Characters for use in memory game
import shuffle from "../utilities/shuffleList"
import "../styles/board.css"
import { useState } from "react"

export default function Tablero() {
  const [actives, isActive] = useState(0)
  const grid_positions = shuffle([
    0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7,
  ])
  let a = -1
  console.log(grid_positions)
  return (
    <div className="board">
      {grid_positions.map((e) => {
        a += 1
        return <Grid key={a} styles={emojis()} number={e}></Grid>
      })}
    </div>
  )
}
