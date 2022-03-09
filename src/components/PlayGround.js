import Board from "./Board"

export default function PlayGround({ tokens }) {
  return (
    <div className="PlayGround">
      <div>
      </div>
      <Board tokens={tokens}></Board>
    </div>
  )
}
