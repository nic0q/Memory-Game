import "../styles/grid.css"
import emojis from "../services/tokens/emojis"
import characters from "../services/tokens/characters"

export default function Grid({ styles, number }) {
  return (
    <>
      <div className="grid">{styles[number]}</div>
    </>
  )
}
