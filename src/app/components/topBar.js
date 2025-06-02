import style from "./comp.module.css"

function SearchBar() {

  return (
    <div className={`${style['searchBar']}`}>
      <input 
        type="search" 
        placeholder="Search" 
        className={`${style['searchBar-input']}`}
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