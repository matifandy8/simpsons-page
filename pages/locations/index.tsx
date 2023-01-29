import React from 'react'
import LocationCard from '../../components/locations/locationCard'
import { fetchDataLocations } from '../../services/apiCalls'
import styles from '../../styles/Locations.module.scss'
import { LocationsType } from '../../types'

const Locations = ({ locations }: any) => {
  return (
    <div>
      <h1 className={styles.title}>Locations</h1>
      <div className={styles.locations}>
        {locations.map((location: any) => (
          <LocationCard key={location.id} name={location.name} image={location.image} id={location.id} />
        ))}
      </div>
    </div>

  )
}

export async function getServerSideProps() {
  const locations = await fetchDataLocations();

  return { props: { locations } }
}

export default Locations