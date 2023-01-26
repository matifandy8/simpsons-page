import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Characters.module.scss'
import Link from 'next/link'
import { CharactersType } from '../../types'




const CharacterCard: React.FC<any> = (CharacterItem: CharactersType) => {
    return (
        <div key={CharacterItem.id} className={styles.card}>
            <Image src={CharacterItem.image} alt={CharacterItem.name} width={150} height={250} />
            <h2>{CharacterItem.name}</h2>
            <Link href={"/characters/" + CharacterItem.id}><h3>More info</h3></Link>
        </div>
    )
}

export default CharacterCard;