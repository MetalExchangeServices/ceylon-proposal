import styles from '../../../../styles/container/ads-page-css/components/packages.module.css'
import Package from './Package'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default function Packages() {
    return(
        <>
        <section className={styles.packages}>
            <header>
        <h2>ready to verify your profile?</h2>
        <h4>choose the package that you want</h4>
            </header>
            <main>
                <div className={styles.blue_card}>
                    <h4>Save More</h4>
                    <h5>With Goodplans</h5>
                    <aside>make sure to choose the package that you want and if you choose wrong one and pay it when we are unable to reverse</aside>
                    <figure><FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></figure>
                </div>
                <Package/>
            </main>
        </section>
        </>
    )
}