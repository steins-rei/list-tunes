import styles from "./comp.module.css"

import SidebarLeft from "./sidebarLeft"
import ContentPane from "./contentPane"
import SidebarRight from "./sidebarRIght"

export default function MiddleContainer() {
  return (
    <div className={`${styles['middle-container']}`}>
      <SidebarLeft />
      <ContentPane />
      <SidebarRight />
    </div>
  )
}