"use client";

import { useState } from "react";
import style from "./comp.module.css"

function NavigationButton({ children , link}) {
  const [hovered, setHover] = useState(false);
  const [pressed, setPress] = useState(false);

  return (
    <a 
      href={link}
      className={`${style['nav-link']}`}
    >
      <div
        className={`${style['nav-link-wrapper']} ${hovered ? 'raised' : ''} ${pressed ? 'lowered' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {
          setHover(false);
          setPress(false);
        }}
        onMouseDown={() => setPress(true)}
        onMouseUp={() => {
          setTimeout(() => setPress(false), 100);
        }}
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