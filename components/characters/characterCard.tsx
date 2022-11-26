import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../../styles/Characters.module.scss'




const CharacterCard: React.FC<any> = ({ CharacterItem }: any) => {
    return (
        <div>
             <Link href="/characters" key={CharacterItem.id}>
                <div className={styles.card} key={CharacterItem.id}>
                     <Image src={CharacterItem.image} alt={CharacterItem.name} width={150} height={250}/>
                     <h1>{CharacterItem.name}</h1> 
                     <h2>More info</h2>
                </div>
            </Link>  
        </div>
    )
}

export default CharacterCard;