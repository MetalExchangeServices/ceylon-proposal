import styles from '../../../../styles/container/profile-page-css/components/basic_profile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faExclamationCircle, faMessage } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useState } from 'react'

export default function Basic_Proposal(basic_profile) {
    const [ Likeing, setLikeing ] = useState(styles.like) 
    return (
        <>
            <main className={styles.basic_profile_main}>
                <section className={styles.basic_like}>
                    <FontAwesomeIcon icon={faHeart} id={Likeing} onClick={() => {if (Likeing == '') {
                        setLikeing(styles.like)
                    }else{
                        setLikeing('')
                    }}}></FontAwesomeIcon>
                    <button id={styles.like_button}><FontAwesomeIcon icon={faHeart} id={Likeing}></FontAwesomeIcon>Like</button>
                    <h3>Profile</h3>
                    <Link href={'/container/support_page/User_problem'}><button><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>Report</button></Link>
                    <Link href={'/container/support_page/User_problem'}><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon></Link>
                    <Link href={'/container/inbox_page/Inbox'}><button className={styles.contect}><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>Contect</button></Link>
                </section>
                <section className={styles.basic_image}>
                    <figure style={{background: 'url(' + basic_profile.basic_profile?.proposal_src + ')'}}></figure>
                </section>
                <section className={styles.basic_info}>
                    <span>
                        <p>Name</p>
                        <p>{basic_profile.basic_profile?.name}</p>
                    </span>
                    <span>
                        <p>Country</p>
                        <p>{basic_profile.basic_profile?.country}</p>
                    </span>
                    <span>
                        <p>Age</p>
                        <p>{basic_profile.basic_profile?.age} year</p>
                    </span>
                    <span>
                        <p>Height</p>
                        <p>5.4 inc</p>
                    </span>
                    <span>
                        <p>Religion</p>
                        <p>{basic_profile.basic_profile?.religion}</p>
                    </span>
                    <span>
                        <p>Civil Status</p>
                        <p>Single</p>
                    </span>
                    <span>
                        <p>Profession</p>
                        <p>{basic_profile.basic_profile?.profession}</p>
                    </span>
                </section>
                <section className={styles.basic_button}>
                    <Link href={'/container/inbox_page/Inbox'}><button className={styles.contect}><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>Contect</button></Link>
                </section>
            </main>
        </>
    )
}