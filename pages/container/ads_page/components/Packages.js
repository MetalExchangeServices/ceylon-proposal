import styles from '../../../../styles/container/ads-page-css/components/packages.module.css'
import Package from './Package'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default function Packages() {
    return(
        <>
        <section className={styles.packages}>
            <header>
        <h2>Ready to verify your profile?</h2>
        <h4>Choose The Package That You Want</h4>
            </header>
            <main>
                <div className={styles.blue_card}>
                    <h4>Save More</h4>
                    <h5>With Goodplans</h5>
                    <aside>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla</aside>
                    <figure><FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></figure>
                </div>
                <Package/>
                <Package/>
                <Package/>
            </main>
        </section>
        </>
    )
}