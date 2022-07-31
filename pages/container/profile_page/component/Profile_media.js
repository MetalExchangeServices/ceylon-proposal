import styles from '../../../../styles/container/profile-page-css/components/profile_media.module.css'

export default function Profile_media() {
    return (
        <>
            <section className={styles.profile_media}>
                <h4>Media</h4>
                <figure className={styles.images}>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </figure>
                <div className={styles.media}>
                    <figure className={styles.video_icon}></figure>
                    <p> Add Title Here </p>
                    <figure className={styles.download_icon}></figure>
                </div>
                <div className={styles.media}>
                    <figure className={styles.pdf_icon}></figure>
                    <p> Add Title Here </p>
                    <figure className={styles.download_icon}></figure>
                </div>
            </section>
        </>
    )
}