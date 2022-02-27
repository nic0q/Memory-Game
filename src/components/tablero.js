import Grid from "./grid"
import emojis from "../services/tokens/emojis"
import characters from "../services/tokens/characters" // Characters for use in memory game

export default function Tablero() {
  return (
    <div>
      <Grid styles={emojis()} number={1}></Grid>
      <Grid styles={emojis()} number={1}></Grid>
      <Grid styles={emojis()} number={2}></Grid>
    </div>
  )
}
