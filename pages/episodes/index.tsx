import React from 'react'
import EpisodeCard from '../../components/episodeCard'
import styles from '../../styles/Episodes.module.scss'

const Episodes: React.FC = ({ episodes }: any) => {
  return (
    <div>
      <h1 className={styles.title}>Episodes</h1>
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

  return { props: { episodes } }
}

export default Episodes