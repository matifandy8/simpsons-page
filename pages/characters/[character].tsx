import React from 'react'
import Image from 'next/image'
import Quotes from '../../components/characters/quotes'
import styles from '../../styles/Characters.module.scss'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types'
import { CharactersType } from '../../types'


const Character = (character: CharactersType) => {
  console.log(character)
  return (
    <div className={styles.character}>
      <div className={styles.characterInfo}>
        <h1>{character.name}</h1>
        <Image src={character.image} alt={character.name} width={200} height={300} />
      </div>
      <Quotes characterName={character.name} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
  const pathurl: any = pageContext.params;
  console.log(pathurl)
  const apiResponse = await fetch(
    `https://simpsons-page.vercel.app/api/characters/${pathurl.character}`
  );
  const character = await apiResponse.json();

  return {
    props: character
  };
};
export default Character