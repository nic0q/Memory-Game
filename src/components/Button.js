import "../styles/buttons.css"

export default function Button({ name, styles }) {
  return <button className={styles}>{name}</button>
}
