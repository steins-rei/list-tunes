"use client";

import style from "./ui.module.css"
import { useState } from "react";

function SearchBar() {
  const [focused, setFocused] = useState(false);

  return (
    <div 
      className={`${style['searchBar']}`}
      style={{border: focused ? '0.1rem solid var(--color-primary)' : '0.1rem solid var(--color-inactive)'}}
    >
      <input 
        type="search" 
        placeholder="Search" 
        className={`${style['searchBar-input']}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  )
}

export default function TopBar() {
  return (
    <section 
      id="topBar"
      className={`${style['container']} ${style['topBar']}`}
    >
      <SearchBar />
      <div>
        
      </div>
    </section>
  );
}