"use client";

import style from "./ui.module.css"
import { useState } from "react";

function NavigationButton({ children , link }) {
  const [pressed, setPressed] = useState(false);

  return (
    <a 
      href={link}
      className={`${style['nav-link']}`}
    >
      <div
        className={`${style['nav-link-wrapper']} ${'hover-mask'} ${pressed ? 'pressed-mask' : ''}`}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
      >
        {children}
      </div>
    </a>
  )
}

export default function SidebarLeft() {
  return (
    <nav
      id="sidebar-left"
      className={`${style['container']} ${style['sidebar-left']}`}
    >
      <NavigationButton link="">Home</NavigationButton>
      <NavigationButton link="">Library</NavigationButton>
      <NavigationButton link="">About</NavigationButton>
    </nav>
  )
}