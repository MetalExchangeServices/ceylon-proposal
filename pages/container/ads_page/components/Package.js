import styles from '../../../../styles/container/ads-page-css/components/package.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export default function Package() {
    return (
        <>
            <section className={styles.Package}>
                <div className={styles.price_section}>
                    <h4>Monthly</h4>
                    <h3>$50<p>/1 Month</p></h3>
                    <aside>Rank your proposal for a 1 month</aside>
                </div>
                <div className={styles.features}>
                    <span>
                        <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        <p>Lorem ipsum dolor sit thi</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        <p>Lorem ipsum dolor sit thi</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        <p>Lorem ipsum dolor sit thi</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        <p>Lorem ipsum dolor sit thi</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        <p>Lorem ipsum dolor sit thi</p>
                    </span>
                </div>
                <button>Verify Now</button>
            </section>
        </>
    )
}