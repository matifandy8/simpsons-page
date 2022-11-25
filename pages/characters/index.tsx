import Link from 'next/link'
import React from 'react'

const Characters: React.FC = ({characters}:any) =>{
    console.log(characters)
  return (
    <div>
          <div>
            {characters.map((character:any) => (
              <Link href={"/projects/" + character.id} key={character.id}>
                <div key={character.id}>
                  <h2>{character.name}</h2>
                  <img src={character.image} alt="project" />
                </div>
              </Link>
            ))}
          </div>
    </div>
  )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/characters`)
    const characters = await res.json()
  
    return { props: { characters } }
  }

export default Characters