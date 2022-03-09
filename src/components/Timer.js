import { useStopwatch } from "react-timer-hook"
import "../styles/score.css"

export default function MyStopwatch() {
  const { seconds, minutes } = useStopwatch({ autoStart: true })
  return (
    <div className="timer">
      <div>
        {minutes < 10 ? (
          <div>
            <span>0{minutes}:</span>
            {seconds < 10 ? <span>0{seconds}</span> : <span>{seconds}</span>}
          </div>
        ) : seconds < 10 ? (
          <span>0{seconds}</span>
        ) : (
          <span>{seconds}</span>
        )}
      </div>
    </div>
  )
}
