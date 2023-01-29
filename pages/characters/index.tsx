import Link from 'next/link'
import React from 'react'
import CharacterCard from '../../components/characters/characterCard'
import { fetchDataCharacters } from '../../services/apiCalls'
import styles from '../../styles/Characters.module.scss'
import { CharactersType } from '../../types'


const Characters = ({ characters }: any) => {
  console.log(characters)
  return (
    <div>
      <h1 className={styles.title}>Characters</h1>
      <div className={styles.characters}>

        {
          characters.length === 0 ? (
            <h3>No characters to show</h3>
          ) : (
            characters.map((character: any) => (
              <CharacterCard key={character?.id} name={character.name} image={character.image} id={character.id} />

            ))
          )
        }

      </div>
    </div>

  )
}

export async function getServerSideProps() {
  const characters = await fetchDataCharacters();

  return { props: { characters } }
}

export default Characters