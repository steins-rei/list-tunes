"use client"

import style from "../page.module.css";
import { useState } from "react";

export default function Artist({artistCover, artistName}) {
  const [pressed, setPressed] = useState(false)

  return (
    <div
      id={artistName}
      className={`${style['card']} ${'hover-mask'} ${pressed ? 'pressed-mask' : ''}`}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      <div className={`${style['artist-pfp']}`}>{artistCover}</div>
      <span className={`${style['artist-name']} large-text`}>{artistName}</span>
    </div>
  )
}