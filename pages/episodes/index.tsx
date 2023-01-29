import React from 'react'
import EpisodeCard from '../../components/episodeCard'
import { seasons } from '../../data'
import { fetchDataEpisodes } from '../../services/apiCalls'
import styles from '../../styles/Episodes.module.scss'
import { EpisodesType } from '../../types'

const Episodes = ({ episodes }: any) => {
  console.log(episodes)
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
        {
          episodes.length === 0 ? (
            <h3>No characters to show</h3>
          ) : (
            episodes?.map((episode: any) => (
              <EpisodeCard key={episode.id} name={episode.name} image={episode.image} id={episode.id} date={episode.date} />
            ))
          )
        }
      </div>
    </div>

  )
}

export async function getServerSideProps() {
  const episodes = await fetchDataEpisodes();

  return { props: { episodes } }
}

export default Episodes