import React from 'react'
import EpisodeCard from '../../components/episodeCard'
import { seasons } from '../../data'
import styles from '../../styles/Episodes.module.scss'
import { EpisodesType } from '../../types'

const Episodes = (episodes: EpisodesType[]) => {
  return (
    <div>
      <h1 className={styles.title}>Episodes</h1>
      <div className={styles.selectSeason}>
        <span>Seleccionar temporada</span>
        <select name="" id="select-season">
          {seasons.map((season: any) => (
            <option key={season.id} value={season.id}>Temporada {season.id}</option>
          ))}
        </select>
      </div>
      <div className={styles.episodes}>
        {episodes.map((episode: any) => (
          <EpisodeCard key={episode.id} episodeItem={episode} />
        ))}

      </div>
    </div>

  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/episodes`)
  const episodes = await res.json()

  return { props: episodes }
}

export default Episodes