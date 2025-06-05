import style from "./page.module.css";
import Artist from "./components/ArtistContainer";
import Song from "./components/Song";

function Section({ children, id, name }) {
  return (
    <div
      id={id}
      className={`${style['main-section']}`}
    >
      <h1 className={`${style['section-title']} ${'title-text'}`}>{name}</h1>
      {children}
    </div>
  )
}

export default function Home() {
  return(
    <main
      id="Home"
      className={`${style['main']} hide-sb`}
    >
      <Section id="recommened-artists" name="Recommended Artists">
        <div className={`${style['card-cont']}`}>
          <Artist artistCover="" artistName="Rory in Early 20s"></Artist>
          <Artist artistCover="" artistName="Mei Ehara"></Artist>
          <Artist artistCover="" artistName="Yorushika"></Artist>
          <Artist artistCover="" artistName="lovekurosa"></Artist>
          <Artist artistCover="" artistName="Aimer"></Artist>
          <Artist artistCover="" artistName="AZALI"></Artist>
        </div>
      </Section>
      <Section id="recommened-songs" name="Recommended Songs">
        <div className={`${style['card-cont']}`}>
          <Song songCover="" songName="Various types of ads" artist="Rory in Early 20s"></Song>
        </div>
      </Section>
    </main>
  )
}