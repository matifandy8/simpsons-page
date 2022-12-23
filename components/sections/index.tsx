import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'



const SectionCard: React.FC<any> = ({ sectionItem }: any) => {
    return (
        <div key={sectionItem.id} className={styles.card}>
            <Link href={sectionItem.link} className={styles.card_link}>
                <Image src={sectionItem.image} alt={sectionItem.name} width={400} height={350} />
            </Link>
            <h2>{sectionItem.name}</h2>
        </div>
    )
}

export default SectionCard;