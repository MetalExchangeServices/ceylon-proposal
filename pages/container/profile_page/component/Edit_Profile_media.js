import styles from '../../../../styles/container/profile-page-css/components/profile_media.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Edit_Profile_media() {
    return (
        <>
            <section className={styles.profile_media}>
                <h4>Media</h4>
                <figure className={styles.images}>
                    <div className={styles.edits_image}>
                    <input type={'file'} style={{display: 'none'}} id='edit_image'/>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    <label htmlFor='edit_image'><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></label>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </figure>
                <div className={styles.media}>
                    <figure className={styles.video_icon}></figure>
                    <input placeholder='Add Video Title'/>
                    <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </div>
                <div className={styles.media}>
                    <figure className={styles.pdf_icon}></figure>
                    <input placeholder='Add PDF Title'/>
                    <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </div>
            </section>
        </>
    )
}