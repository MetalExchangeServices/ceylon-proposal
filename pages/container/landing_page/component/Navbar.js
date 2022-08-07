import styles from '../../../../styles/container/landing-page-css/components/navbar.module.css'

export default function Navbar() {
    return(
        <>
        <nav className={styles.navbar}>
            <figure></figure>
            <div>
                <button className={styles.button1}>Log<p>In</p></button>
                <button className={styles.button2}>Sign<p>Up</p></button>
                <button className={styles.button3}>Join<p>Now</p></button>
            </div>
        </nav>
        </>
    )
}