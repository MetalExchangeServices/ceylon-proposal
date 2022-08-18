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
            setNo_chat_select('none')
        }
    },[Chat.Chat])
    const [Select, setSelect] = useState('none')
    const [No_chat_select, setNo_chat_select] = useState('')
    const message = Chat?.Chat?.messages
    return (
        <>
            <section className={styles.main}>
                <header style={{ display: Select }} className={styles.main_header}>
                    <FontAwesomeIcon icon={faChevronLeft} id='Back_Btn'></FontAwesomeIcon>
                    <div>
                        <figure style={{ background: 'url(' + Chat?.Chat?.profile_src + ')' }}></figure>
                        <span>
                            <h5>{Chat?.Chat?.user}</h5>
                            <aside>Last Seen<p>{Chat?.Chat?.last_online}</p></aside>
                        </span>
                    </div>
                    <span className={styles.icon_section}>
                        <FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faUserLock}></FontAwesomeIcon>
                        <Link href={'/container/support_page/User_problem'}><FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon></Link>
                    </span>
                </header>
                <section className={styles.no_chat_select} style={{display: No_chat_select}}>
                    <figure></figure>
                    <h5>Select a Conversation</h5>
                    <p>Try selecting a conversation or searching for someone specific.</p>
                </section>
                <div style={{ display: Select }} className={styles.chats_main}>
                    <div className={styles.chats}>
                        {(Array.isArray(message) ? message : []).map((chat_message) => {
                            let image = Chat.Chat.profile_src

                            return (
                                <div key={chat_message.message}>
                                    <figure style={{ background: 'url('+image+')' }} id={chat_message.name}></figure>
                                    <span>
                                        <h5>{chat_message.name}<p>{chat_message.date}</p></h5>
                                        <aside>{chat_message.message}</aside>
                                    </span>
                                </div>
                            )
                        })}
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