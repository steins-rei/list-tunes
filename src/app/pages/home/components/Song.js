"use client"

import style from "../page.module.css";
import { useState } from "react";

export default function Song({songCover, songName, artist}) {
  const [pressed, setPressed] = useState(false)

  return (
    <div
      id={songName}
      className={`${style['card']} ${'hover-mask'} ${pressed ? 'pressed-mask' : ''}`}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      <div className={`${style['song-cover']}`}>{songCover}</div>
      <span className={`${style['song-name']} large-text`}>{songName}</span>
      <span className={`${style['artist-name']} sub-large-text`}>{artist}</span>
    </div>
  )
}