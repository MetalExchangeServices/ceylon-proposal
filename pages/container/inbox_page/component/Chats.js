import styles from '../../../../styles/container/inbox-page-css/components/chats.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faCircleExclamation, faUserLock, faEnvelopeOpenText, faImage, faGift, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Message from './message'

export default function Chats(Chat) {
    useEffect(() => {
        if (Chat.Chat == '') {

        } else {
            setSelect('flex')
            setNo_chat_select('none')
        }
    }, [Chat.Chat])
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
                <section className={styles.no_chat_select} style={{ display: No_chat_select }}>
                    <figure></figure>
                    <h5>Select a Conversation</h5>
                    <p>Try selecting a conversation or searching for someone specific.</p>
                </section>
                <div style={{ display: Select }} className={styles.chats_main}>
                    <div className={styles.chats}>
                        {(Array.isArray(message) ? message : []).map((chat_message, index) => {
                            return (
                                <Message key={index} hadding={chat_message.name} date={chat_message.date} message={chat_message.message}></Message>
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