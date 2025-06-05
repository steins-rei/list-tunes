import style from "./ui.module.css";

export default function ContentPane({ children }) {
  return (
    <main
      id="content-pane"
      className={`${style['container']} ${style['content-pane']}`}
    >
      {children}
    </main>
  )
}