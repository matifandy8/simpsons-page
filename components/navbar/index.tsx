import Image from 'next/image'
import logo from '/public/The_Simpsons_logo.svg'
import styles from '../../styles/Navbar.module.scss'
import Link from 'next/link'




export default function Navbar() {
    return (
        <nav className={styles.nav_container} >
            <Link href={"/"}>
                <div className={styles.brand}>
                    <Image
                        src={logo}
                        alt="the simpson logo"
                        width={80}
                        height={80}
                    />
                </div>
            </Link>
            <nav>
                <ul className={styles.nav_list}>
                    <li><Link href={"/episodes"} className={styles.link}>Episodes</Link></li>
                    <li><Link href={"/locations"} className={styles.link}>Locations</Link></li>
                    <li><Link href={"/characters"} className={styles.link}>Characters</Link></li>
                </ul>
            </nav>
        </nav>
    )
}
