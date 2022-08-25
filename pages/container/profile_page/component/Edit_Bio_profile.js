import styles from '../../../../styles/container/profile-page-css/components/bio_profile.module.css'

export default function Edit_Bio_profile() {
    return(
        <>
        <section className={styles.bio_profile}>
            <h4>About</h4>
            <div>
                <textarea placeholder='Enter about your self...'></textarea>
            </div>
        </section>
        </>
    )
}