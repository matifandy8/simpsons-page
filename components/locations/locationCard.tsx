import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Locations.module.scss'
import Link from 'next/link'
import { LocationsType } from '../../types'




const LocationCard: React.FC<any> = ({ name, image, id }) => {
    return (
        <div key={id} className={styles.card}>
            <Image src={image} alt={name} width={200} height={150} />
            <h2>{name}</h2>
            <Link href={"/locations/" + id}><h3>More info</h3></Link>
        </div>
    )
}

export default LocationCard;