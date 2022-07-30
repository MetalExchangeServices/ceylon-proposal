import styles from '../../../../styles/container/profile-page-css/components/basic_profile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'

export default function Basic_Profile() {
    return (
        <>
            <main className={styles.basic_profile_main}>
                <section className={styles.basic_header}>
                    <button>Verify Profile</button>
                    <Link href='#'>
                    <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                    </Link>
                    <button>Edit Profile</button>
                    <Link href='#'>
                    <button>Hide Profile</button>
                    </Link>
                </section>
                <section className={styles.basic_image}>
                    <figure></figure>
                </section>
                <section className={styles.basic_info}>
                    <span>
                        <p>Name</p>
                        <p>Faisal</p>
                    </span>
                    <span>
                        <p>Caste</p>
                        <p>Qurashi</p>
                    </span>
                    <span>
                        <p>Country</p>
                        <p>Canada</p>
                    </span>
                    <span>
                        <p>Age</p>
                        <p>24 year</p>
                    </span>
                    <span>
                        <p>Height</p>
                        <p>5.4 inc</p>
                    </span>
                    <span>
                        <p>Religion</p>
                        <p>Christan</p>
                    </span>
                    <span>
                        <p>Civil Status</p>
                        <p>Single</p>
                    </span>
                    <span>
                        <p>Profession</p>
                        <p>Programmer</p>
                    </span>
                </section>
                <section className={styles.basic_button}>
                    <button>Hide Proposal</button>
                </section>
             </main>
        </>
    )
}