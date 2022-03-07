import Moves from "./Moves"

export default function Options({ counter }) {
  return (
    <div>
      <Moves moves={counter}></Moves>
    </div>
  )
}
