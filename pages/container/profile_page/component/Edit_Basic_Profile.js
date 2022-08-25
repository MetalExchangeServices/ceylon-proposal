import styles from '../../../../styles/container/profile-page-css/components/basic_profile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
var invalidChars = ["-", "+", "e", "."];
var invalidChar = ["-", "+", "e"];

export default function Edit_Basic_Profile() {
    return (
        <>
            <main className={styles.basic_profile_main}>
                <section className={styles.basic_header}>
                    <button className={styles.save_changes}>Save Changes</button>
                    <Link href={'/container/profile_page/Profile'}><FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon></Link>
                    <Link href={'/container/profile_page/Profile'}><button>Discard Changes</button></Link>
                </section>
                <section className={styles.basic_image}>
                    <figure>
                        <div>
                            <input id='profile_photo_edit' type={'file'} accept='png, jpg' />
                            <label htmlFor='profile_photo_edit'>
                                <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                            </label>
                        </div>
                    </figure>
                </section>
                <section className={styles.basic_info}>
                    <span>
                        <p>Name</p>
                        <input placeholder='Enter Name' />
                    </span>
                    <span>
                        <p>Country</p>
                        <input placeholder='Enter Country' />
                    </span>
                    <span>
                        <p>Age</p>
                        <input placeholder='Enter Age' type={'number'} className={styles.only_num} onKeyDown={(e) => {
                            if (invalidChars.includes(e.key)) {
                                e.preventDefault();
                            }
                        }} />
                    </span>
                    <span>
                        <p>Height</p>
                        <input placeholder='Enter Height' type={'number'} className={styles.only_num} onKeyDown={(e) => {
                            if (invalidChar.includes(e.key)) {
                                e.preventDefault();
                            }
                        }} />
                    </span>
                    <span>
                        <p>Religion</p>
                        <input placeholder='Enter Religion' />
                    </span>
                    <span>
                        <p>Civil Status</p>
                        <input placeholder='Single or Merried' />
                    </span>
                    <span>
                        <p>Profession</p>
                        <input placeholder='Enter Profession' />
                    </span>
                </section>
            </main>
        </>
    )
}