import Board from "./Board"

export default function PlayGround({ tokens, gridSize }) {
  return (
    <div className="PlayGround">
      <div></div>
      <Board tokens={tokens} gridSize={gridSize}></Board>
    </div>
  )
}
