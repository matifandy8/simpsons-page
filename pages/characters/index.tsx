import Link from 'next/link'
import React from 'react'
import CharacterCard from '../../components/characters/characterCard'
import styles from '../../styles/Characters.module.scss'

const Characters: React.FC = ({ characters }: any) => {
  return (
      <div className={styles.characters}>
        {characters.map((character: any) => (
          <CharacterCard key={character.id} CharacterItem={character} />
        ))}

      </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/characters`)
  const characters = await res.json()

  return { props: { characters } }
}

export default Characters