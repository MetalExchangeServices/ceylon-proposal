import styles from '../../../../styles/container/inbox-page-css/components/chats.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faCircleExclamation, faUserLock, faEnvelopeOpenText, faImage, faGift, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Chats(Chat) {
    useEffect(() => {
        if (Chat.Chat == '') {

        } else {
            setSelect('flex')
            console.log(Chat.Chat)
        }
    })
    const [Select, setSelect] = useState('none')

    return (
        <>
            <section className={styles.main}>
                <header style={{ display: Select }} className={styles.main_header}>
                    <FontAwesomeIcon icon={faChevronLeft} id='Back_Btn'></FontAwesomeIcon>
                    <div>
                        <figure style={{background: 'url('+Chat.Chat.profile_src+')'}}></figure>
                        <span>
                            <h5>{Chat.Chat.user}</h5>
                            <aside>Last Seen<p>{Chat.Chat.last_online}</p></aside>
                        </span>
                    </div>
                    <span className={styles.icon_section}>
                        <FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faUserLock}></FontAwesomeIcon>
                        <Link href={'/container/support_page/User_problem'}><FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon></Link>
                    </span>
                </header>
                <div style={{ display: Select }} className={styles.chats_main}>
                    <div className={styles.chats}>
                        {/* {Chat.Chat.messages.map((message) => {
                            useEffect(() => {
                                document.getElementById(Chat.Chat.user).style.background = 'url('+Chat.Chat.profile_src+')'
                            })
                            return (
                                <div key={message.message}>
                                    <figure id={message.name}></figure>
                                    <span>
                                        <h5>{message.name}<p>{message.date}</p></h5>
                                        <aside>{message.message}</aside>
                                    </span>
                                </div>
                            )
                        })} */}
                    </div>
                    <div className={styles.inputs}>
                        <FontAwesomeIcon icon={faGift}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                        <input placeholder='Type your message' />
                        <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                    </div>
                </div>
            </section>
        </>
    )
}