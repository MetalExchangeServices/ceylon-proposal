import styles from '../../../../styles/container/support-page-css/components/Profiles_FandQ.module.css'
import Link from 'next/link'

export default function Profiles_FandQ(props) {
    return (
        <>
            <section className={styles.main}>
                <div className={styles.profiles}>
                    <span><figure></figure></span>
                    <span><figure></figure></span>
                    <span><figure></figure></span>
                </div>
                <div className={styles.hading}>
                    <h5>{props.hading}</h5>
                    <Link href={'/container/inbox_page/Inbox'}>
                        Please Chat to our friendly team
                    </Link>
                </div>
            </section>
        </>
    )
}