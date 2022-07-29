import styles from '../../../../styles/container/home-page-css/components/pagenavigate.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'


export default function Pagenavigate() {
    return (
        <>
            <section>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <FontAwesomeIcon icon={faRightLong}></FontAwesomeIcon>
                <span>67</span>
            </section>
        </>
    )
}