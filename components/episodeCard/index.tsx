import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Episodes.module.scss'
import Link from 'next/link'
import { EpisodesType } from '../../types'




const EpisodeCard: React.FC<any> = ({ name, image, id, date }: EpisodesType) => {
    return (
        <div key={id} className={styles.card}>
            <div className={styles.image}>
                <Image src={image} alt={name} width={200} height={150} />
                <div className={styles.middle}>
                    <Link href={"/episodes/" + id}>
                        <p className={styles.text}><img src="/play.svg" alt="" /></p>
                    </Link>
                </div>
            </div>
            <h2>{id}: {name}</h2>
            <p>{date}</p>
        </div>
    )
}

export default EpisodeCard;