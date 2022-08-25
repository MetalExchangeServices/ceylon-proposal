import { useState } from 'react';
import styles from '../../../../styles/container/profile-page-css/components/profile_media.module.css'

export default function Profile_media(prop) {
    const [Image, setImage] = useState(prop.proposal_media?.image?.image_src1)
    return (
        <>
            <section className={styles.profile_media}>
                <h4>Media</h4>
                <figure style={{background: 'url(' + Image + ')'}} className={styles.images}>
                    <div>
                        <span onClick={(e) => {setImage(prop.proposal_media?.image?.image_src1); e.target.style.background = 'var(--light-blue)'; e.target.nextSibling.style.background = 'var(--grey)'; e.target.nextSibling.nextSibling.style.background = 'var(--grey)'}}></span>
                        <span onClick={(e) => {setImage(prop.proposal_media?.image?.image_src2); e.target.style.background = 'var(--light-blue)'; e.target.nextSibling.style.background = 'var(--grey)'; e.target.previousSibling.style.background = 'var(--grey)'}}></span>
                        <span onClick={(e) => {setImage(prop.proposal_media?.image?.image_src3); e.target.style.background = 'var(--light-blue)'; e.target.previousSibling.style.background = 'var(--grey)'; e.target.previousSibling.previousSibling.style.background = 'var(--grey)'}}></span>
                    </div>
                </figure>
                <div className={styles.media}>
                    <figure className={styles.video_icon}></figure>
                    <p> {prop.proposal_media?.video?.title} </p>
                    <figure className={styles.download_icon}></figure>
                </div>
                <div className={styles.media}>
                    <figure className={styles.pdf_icon}></figure>
                    <p> {prop.proposal_media?.pdf?.title} </p>
                    <figure className={styles.download_icon}></figure>
                </div>
            </section>
        </>
    )
}