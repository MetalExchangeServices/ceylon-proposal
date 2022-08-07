import styles from '../../../../styles/container/landing-page-css/components/content.module.css'

export default function Content() {
    return (
        <>
            <main className={styles.content}>
                <h1>Ceylon<pre> Proposal</pre></h1>
                <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</h2>
                <div>
                    <button>Random Proposals</button>
                    <span></span>
                    <button>Setup Profile</button>
                </div>
            </main>
        </>
    )
}