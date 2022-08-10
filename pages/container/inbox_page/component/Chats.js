import styles from '../../../../styles/container/inbox-page-css/components/chats.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faCircleExclamation, faUserLock ,faEnvelopeOpenText ,faImage ,faGift, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function Chats() {

    return (
        <>
            <section className={styles.main}>
                <header className={styles.main_header}>
                    <FontAwesomeIcon icon={faChevronLeft} id='Back_Btn'></FontAwesomeIcon>
                    <div>
                        <figure></figure>
                        <span>
                            <h5>Faisal Qurashi</h5>
                            <aside>Last Seen<p>2 Hour Ago</p></aside>
                        </span>
                    </div>
                    <span className={styles.icon_section}>
                        <FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faUserLock}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
                    </span>
                </header>
                <div className={styles.chats_main}>
                    <div className={styles.chats}>
                        <div>
                            <figure></figure>
                            <span>
                                <h5>Faisal Qurashi<p>1 Day Ago</p></h5>
                                <aside>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</aside>
                            </span>
                        </div>
                        <div>
                            <figure></figure>
                            <span>
                                <h5>Faisal Qurashi<p>1 Day Ago</p></h5>
                                <aside>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</aside>
                            </span>
                        </div>
                        <div>
                            <figure></figure>
                            <span>
                                <h5>Faisal Qurashi<p>1 Day Ago</p></h5>
                                <aside>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</aside>
                            </span>
                        </div>
                        <div>
                            <figure></figure>
                            <span>
                                <h5>Faisal Qurashi<p>1 Day Ago</p></h5>
                                <aside>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</aside>
                            </span>
                        </div>
                        <div>
                            <figure></figure>
                            <span>
                                <h5>Faisal Qurashi<p>1 Day Ago</p></h5>
                                <aside>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</aside>
                            </span>
                        </div>
                        <div>
                            <figure></figure>
                            <span>
                                <h5>Faisal Qurashi<p>1 Day Ago</p></h5>
                                <aside>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</aside>
                            </span>
                        </div>
                        <div>
                            <figure></figure>
                            <span>
                                <h5>Faisal Qurashi<p>1 Day Ago</p></h5>
                                <aside>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</aside>
                            </span>
                        </div>
                    </div>
                    <div className={styles.inputs}>
                        <FontAwesomeIcon icon={faGift}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                        <input placeholder='Type your message'/>
                        <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                    </div>
                </div>
            </section>
        </>
    )
}