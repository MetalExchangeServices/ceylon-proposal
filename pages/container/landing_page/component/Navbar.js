import styles from '../../../../styles/container/landing-page-css/components/navbar.module.css'
import Link from 'next/link'
// import Login from '../../login_page/Login'

export default function Navbar() {
    return(
        <>
        <nav className={styles.navbar}>
            <figure></figure>
            <div>
                <Link href={'/container/login_page/Login'}><button className={styles.button1}>Log<p>In</p></button></Link>
                <Link href={'/container/login_page/Login'}><button className={styles.button2}>Sign<p>Up</p></button></Link>
                <Link href={'/container/login_page/Login'}><button className={styles.button3}>Join<p>Now</p></button></Link>
            </div>
        </nav>
        </>
    )
}