import React from 'react'
import Image from 'next/image'
import Quotes from '../../components/characters/quotes'
import styles from '../../styles/Characters.module.scss'


const Character: React.FC = ({ character }: any) => {
  return (
    <div className={styles.character}>
      <div className='character_info'>
        <h1>{character.name}</h1>
        <Image src={character.image} alt={character.name} width={200} height={300} />
      </div>
        <Quotes characterName={character.name} />
    </div>
  )
}

export const getServerSideProps = async (pageContext: any) => {
  const pathurl = pageContext.params;
  const apiResponse = await fetch(
    `http://localhost:3000/api/characters/${pathurl.character}`
  );
  const character = await apiResponse.json();

  return {
    props: {
      character,
    },
  };
};
export default Character