import styles from '../../../../styles/container/landing-page-css/components/content.module.css'
import Link from 'next/link'

export default function Content() {
    return (
        <>
            <main className={styles.content}>
                <section>
                    <h1>kiwi<p>singles</p></h1>
                    <h2>in this website their are lot of proposal of your type and try to find best proposal of your type and also publish your adds to get more offers for your future patner and we can give your future patner here</h2>
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