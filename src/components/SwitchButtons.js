import { useState } from "react"

export default function SwitchButtons({ option1, option2, task }) {
  const [active, setActive] = useState(1)
  const handleClick = (key) => {
    setActive(key)
  }
  return (
    <div className="symbols">
      <div>
        {active === 1 ? (
          <div>
            <button key={1} className="active" onClick={() => handleClick(1)}>
              {option1}
            </button>
            <button key={2} className="option" onClick={() => handleClick(2)}>
              {option2}
            </button>
          </div>
        ) : active === 2 ? (
          <div>
            <button key={1} className="option" onClick={() => handleClick(1)}>
              {option1}
            </button>
            <button key={2} onClick={() => handleClick(2)} className="active">
              {option2}
            </button>
          </div>
        ) : (
          <div>
            <button key={1} className="option" onClick={() => handleClick(1)}>
              {option1}
            </button>
            <button key={2} className="option" onClick={() => handleClick(2)}>
              {option2}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
