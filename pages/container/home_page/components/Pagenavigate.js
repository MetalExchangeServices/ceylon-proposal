import styles from '../../../../styles/container/home-page-css/components/pagenavigate.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'


export default function Pagenavigate() {
    return (
        <>
            <section className={styles.Pagenavigate}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <FontAwesomeIcon icon={faRightLong}></FontAwesomeIcon>
                <p>99</p>
            </section>
        </>
    )
}