import React from 'react'
import LocationCard from '../../components/locations/locationCard'
import styles from '../../styles/Locations.module.scss'

const Locations: React.FC = ({ locations }: any) => {
  return (
    <div>
      <h1 className={styles.title}>Locations</h1>
      <div className={styles.locations}>
        {locations.map((location: any) => (
          <LocationCard key={location.id} locationItem={location} />
        ))}

      </div>
    </div>

  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/locations`)
  const locations = await res.json()

  return { props: { locations } }
}

export default Locations