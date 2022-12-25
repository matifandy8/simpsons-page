import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Episodes.module.scss'




const EpisodeCard: React.FC<any> = ({ episodeItem }: any) => {
    return (
        <div key={episodeItem.id} className={styles.card}>
            <div className={styles.image}>
                            <Image src={episodeItem.image} alt={episodeItem.name}  width={200} height={150} />
                  <div className={styles.middle}>
                    <p className={styles.text}>text</p>
                  </div>
            </div>
            <h2>{episodeItem.id}: {episodeItem.name}</h2>
            <p>{episodeItem.date}</p>
        </div>
    )
}

export default EpisodeCard;