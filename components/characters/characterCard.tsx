import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Characters.module.scss'
import Link from 'next/link'
import { CharactersType } from '../../types'




const CharacterCard = ({ name, image, id }: any) => {
  return (
    <div className={styles.card}>
      {image ? (
        <Image src={image} alt={name} width={150} height={250} />
      ) : (
        <Image src="https://liftlearning.com/wp-content/uploads/2020/09/default-image-300x169.png" alt={name} width={150} height={250} />
      )}
      <h2>{name}</h2>
      <Link href={"/characters/" + id}><h3>More info</h3></Link>
    </div>
  )
}

export default CharacterCard;