import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Locations.module.scss'
import Link from 'next/link'




const LocationCard: React.FC<any> = ({ locationItem }: any) => {
    return (
        <div key={locationItem.id} className={styles.card}>
            <Image src={locationItem.image} alt={locationItem.name} width={200} height={150} />
            <h1>{locationItem.name}</h1>
            <Link href={"/locations/" + locationItem.id}><h2>More info</h2></Link>
        </div>
    )
}

export default LocationCard;