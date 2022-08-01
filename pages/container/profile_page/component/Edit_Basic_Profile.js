import styles from '../../../../styles/container/profile-page-css/components/basic_profile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Edit_Basic_Profile() {
    return (
        <>
            <main className={styles.basic_profile_main}>
                <section className={styles.basic_header}>
                    <button className={styles.save_changes}>Save Changes</button>
                    <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
                    <button>Discard Changes</button>
                </section>
                <section className={styles.basic_image}>
                    <figure>
                        <div>
                            <input id='profile_photo_edit'/>
                            <label htmlFor='profile_photo_edit'>
                            <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                            </label>
                        </div>
                    </figure>
                </section>
                <section className={styles.basic_info}>
                    <span>
                        <p>Name</p>
                        <input/>
                    </span>
                    <span>
                        <p>Caste</p>
                        <input/>
                    </span>
                    <span>
                        <p>Country</p>
                        <input/>
                    </span>
                    <span>
                        <p>Age</p>
                        <input/>
                    </span>
                    <span>
                        <p>Height</p>
                        <input/>
                    </span>
                    <span>
                        <p>Religion</p>
                        <input/>
                    </span>
                    <span>
                        <p>Civil Status</p>
                        <input/>
                    </span>
                    <span>
                        <p>Profession</p>
                        <input/>
                    </span>
                </section>
             </main>
        </>
    )
}