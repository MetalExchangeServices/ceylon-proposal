import styles from '../../../../styles/container/home-page-css/components/porposal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Proposal() {
  return (
    <>
      <main className={styles.proposal}>
        <figure>
            <div className={styles.img_top}>
                <FontAwesomeIcon className={styles.verify} icon={faCircleCheck}></FontAwesomeIcon>
                <p>Doctor</p>
                <FontAwesomeIcon className={styles.report} icon={faExclamationCircle}></FontAwesomeIcon>
            </div>
            <div className={styles.image_changer}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </figure>
        <div className={styles.basic_info}>
            <span className={styles.name}>
                <p>Name</p>
                <h3>Olivia</h3>
            </span>
            <span className={styles.country}>
                <p>Country</p>
                <h3>Canada</h3>
            </span>
        </div>
        <aside> The proposed daughter is 25 years old,5.3” in height ​pretty ​very fair and well-mannered. She studied overseas and completed her final year MBBS exam in a medical faculty in Sri Lanka. She is waiting for selection for the internship in a teaching hospital. Overseas responses are considered</aside>
        <div className={styles.button}>
            <Link href={'/container/profile_page/Proposal'}><button>More Info</button></Link>
        </div>
      </main>
    </>
  )
}