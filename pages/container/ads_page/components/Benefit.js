import styles from '../../../../styles/container/ads-page-css/components/benefit.module.css'
const bottom_benefits = [
    {
        hadding: 'we rank your proposal',
        paragrafe: 'in our website those proposal show on the top that are verify and you need to choose one of these package and get verify to incress our rank and make your place on top',
        image_link: '',
    },
    {
        hadding: 'we verify your proposal',
        paragrafe: 'those proposal show on the top that are verify and you need to choose one of these package and get verify to incress our rank and make your place on top',
        image_link: '',
    },
    {
        hadding: 'we save your time',
        paragrafe: 'we save your so you can need to find patner and you need to choose one of these package and get verify',
        image_link: '',
    }
]

export default function Benefit() {
    return (
        <>
            <section className={styles.benefit}>
                <h2>how upgraded profile can help us to find partner?</h2>
                {bottom_benefits.map((benefit) => {
                    return (
                        <div key={benefit.hadding}>
                            <figure
                             // style={{background: 'url('+benefit.image_link+')'}}
                            ></figure>
                            <span>
                                <h3>{benefit.hadding}</h3>
                                <aside>{benefit.paragrafe}</aside>
                            </span>
                        </div>
                    )
                })}
            </section>
        </>
    )
}