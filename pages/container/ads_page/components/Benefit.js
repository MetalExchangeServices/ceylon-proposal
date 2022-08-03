import styles from '../../../../styles/container/ads-page-css/components/benefit.module.css'

export default function Benefit() {
    return (
        <>
            <section className={styles.benefit}>
                <h2>How upgraded profile can help us to find partner?</h2>
                <div className={styles.rank}>
                    <figure></figure>
                    <span>
                        <h3>We rank your proposal</h3>
                        <aside>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</aside>
                    </span>
                </div>
                <div className={styles.verify}>
                    <figure></figure>
                    <span>
                        <h3>We verify your proposal</h3>
                        <aside>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</aside>
                    </span>
                </div>
                <div className={styles.time}>
                    <figure></figure>
                    <span>
                        <h3>We save your time</h3>
                        <aside>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</aside>
                    </span>
                </div>
            </section>
        </>
    )
}