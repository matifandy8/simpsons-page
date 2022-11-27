import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Characters.module.scss'
import Link from 'next/link'




const CharacterCard: React.FC<any> = ({ CharacterItem }: any) => {
    return (
        <div key={CharacterItem.id} className={styles.card}>
            <Image src={CharacterItem.image} alt={CharacterItem.name} width={150} height={250} />
            <h1>{CharacterItem.name}</h1>
            <Link href={"/characters/" + CharacterItem.id}><h2>More info</h2></Link>
        </div>
    )
}

export default CharacterCard;