import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'



const SectionCard: React.FC<any> = ({ sectionItem }: any) => {
    return (
        <div key={sectionItem.id} className={styles.card}>
            <Link href={sectionItem.link}>
            <Image src={sectionItem.image} alt={sectionItem.name} width={400} height={350} />
            <h2>{sectionItem.name}</h2>
            </Link>
        </div>
    )
}

export default SectionCard;