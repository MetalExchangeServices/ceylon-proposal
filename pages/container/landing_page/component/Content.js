import styles from '../../../../styles/container/landing-page-css/components/content.module.css'
import Link from 'next/link'
import Content_api from '../../Content_api'

export default function Content() {
    const content = Content_api.Website_info

    return (
        <>
            <main className={styles.content}>
                <section>
                    <h1>{content.website_first_name}<p>{content.website_second_name}</p></h1>
                    <h2>{content.website_discription}</h2>
                    <div>
                        <Link href={'/container/home_page/Home'}><button>Random Proposals</button></Link>
                        <span></span>
                        <Link href={'/container/profile_page/Edit_Profile'}><button>Setup Profile</button></Link>
                    </div>
                </section>
            </main>
        </>
    )
}