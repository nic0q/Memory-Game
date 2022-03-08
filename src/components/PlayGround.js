import Board from "./Board"

export default function PlayGround({ tokens }) {
  return (
    <div className="PlayGround">
      <div>
        <br></br>
        <br></br>
      </div>
      <Board tokens={tokens}></Board>
    </div>
  )
}
