import "../styles/score.css"

export default function Score({ moves }) {
  return (
    <div className="moves">
      <h6>Moves</h6>
      <h4 className="number">{moves}</h4>
    </div>
  )
}
