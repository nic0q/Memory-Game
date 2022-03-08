import { useState } from "react"

export default function Menu() {
  const [active, setActive] = useState(-1)
  const handleClick = (key) => {
    setActive(key)
  }
  return (
    <div className="menu">
      <div className="symbols">
        <div>
          {active === 1 ? (
            <button key={1} onClick={() => handleClick(1)}>
              Emoji
            </button>
          ) : (
            <button key={1} onClick={() => handleClick(1)}>
              className={active}
              Emoji
            </button>
          )}
        </div>

        <button key={2} onClick={() => handleClick(2)}>
          Character
        </button>
      </div>
    </div>
  )
}
