import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Locations.module.scss'
import Link from 'next/link'




const LocationCard: React.FC<any> = ({ locationItem }: any) => {
    return (
        <div key={locationItem.id} className={styles.card}>
            <Image src={locationItem.image} alt={locationItem.name} width={200} height={150} />
            <h2>{locationItem.name}</h2>
            <Link href={"/locations/" + locationItem.id}><h3>More info</h3></Link>
        </div>
    )
}

export default LocationCard;