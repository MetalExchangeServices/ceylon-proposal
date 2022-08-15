import styles from '../../../../styles/container/ads-page-css/components/package.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
let packages = [
    {
        id: 'package_1',
        title: 'only verify',
        price: '20',
        duration: '1 year',
        about_package: 'verify your proposal for 1 year',
        offer: [{
                benefit: 'rank your proposal',
                benefit_states: 'available',
            },{
                benefit: 'verify your proposal',
                benefit_states: 'available',
            },{
                benefit: 'targeted of user',
                benefit_states: 'available',
            },{
                benefit: 'run ads of proposal',
                benefit_states: 'unavailable',
            },{
                benefit: 'run ads of proposal in top',
                benefit_states: 'unavailable',
            }
        ]
    },
    {
        id: 'package_2',
        title: 'monthly',
        price: '50',
        duration: '30 days',
        about_package: 'verify and run ads of your proposal for 1 month',
        offer: [{
            benefit: 'rank your proposal',
            benefit_states: 'available',
        },{
            benefit: 'verify your proposal',
            benefit_states: 'available',
        },{
            benefit: 'targeted of user',
            benefit_states: 'available',
        },{
            benefit: 'run ads of proposal',
            benefit_states: 'available',
        },{
            benefit: 'run ads of proposal in top',
            benefit_states: 'unavailable',
        }]
    },
    {
        id: 'package_3',
        title: 'half year',
        price: '200',
        duration: '6 month',
        about_package: 'verify and run ads of your proposal for 6 month',
        offer: [{
            benefit: 'rank your proposal',
            benefit_states: 'available',
        },{
            benefit: 'verify your proposal',
            benefit_states: 'available',
        },{
            benefit: 'targeted of user',
            benefit_states: 'available',
        },{
            benefit: 'run ads of proposal',
            benefit_states: 'available',
        },{
            benefit: 'run ads of proposal in top',
            benefit_states: 'available',
        }]
    }]

export default function Package() {
    return(
        <>
            {packages.map((content) => {
                const offers = content.offer
                return (
                    <section className={styles.Package} key={content.id}>
                        <div className={styles.price_section}>
                            <h4>{content.title}</h4>
                            <h3>${content.price}<p>/{content.duration}</p></h3>
                            <aside>{content.about_package}</aside>
                        </div>
                        <div className={styles.features}>
                            {offers.map((offers) => {
                                return (
                                    <span key={offers.benefit} id={offers.benefit_states}>
                                        <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                                        <p>{offers.benefit}</p>
                                    </span>
                                )
                            })}
                        </div>
                        <button id={content.id}>Verify Now</button>
                    </section>
                )
            })}
        </>
    )
}