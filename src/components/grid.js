import "../styles/grid.css"
import { useState } from "react"
const arr = new Array(16).fill(0)

export default function Grid({ styles, number }) {
  const [isFliped, setIsFliped] = useState(false)
  
  const handleClick = () => {
    setIsFliped(true)
    arr[number] = 1
    console.log(arr)
    console.log(isFliped)
  }
  return !isFliped ? ( // if not isFliped
    <div>
      <div className="grid" onClick={handleClick}></div>
    </div>
  ) : (
    <div>
      <div className="grid animationBack">{styles[number]}</div>
    </div>
  )
}
