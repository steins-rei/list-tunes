import styles from "./ui.module.css"

export default function MiddleContainer({ children }) {
  return (
    <div className={`${styles['middle-container']}`}>
      { children }
    </div>
  )
}