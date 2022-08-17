import styles from '../../../../styles/container/inbox-page-css/components/friends.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faSearch, faUserGroup, faUserPlus, faUserClock, faEnvelopeOpen, faUserSlash, faFileZipper, faBridgeLock, faMessage } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

const inbox = {
    name: 'faisal qurashi',
    profile_src: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    chats: [{
        states: 'friend',
        user: 'faraz',
        profile_src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
        last_online: 'online',
        messages: [{
            name: 'faraz',
            date: '10 days ago',
            message: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faraz',
            date: '6 days ago',
            message: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '1 day ago',
            message: 'praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faraz',
            date: '4 hour ago',
            message: 'how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '1 hour ago',
            message: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faraz',
            date: '55 minutes ago',
            message: 'idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '30 minutes ago',
            message: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '10 minutes ago',
            message: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faraz',
            date: '55 minutes ago',
            message: 'idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        },]
    }, {
        states: 'invite',
        user: 'talha',
        profile_src: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
        last_online: '8 minutes ago',
        messages: [{
            name: 'talha',
            date: '10 days ago',
            message: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'talha',
            date: '6 days ago',
            message: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '1 day ago',
            message: 'praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'talha',
            date: '4 hour ago',
            message: 'how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '1 hour ago',
            message: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'talha',
            date: '55 minutes ago',
            message: 'idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '30 minutes ago',
            message: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '10 minutes ago',
            message: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        },]
    }, {
        states: 'requests',
        user: 'abdul sami',
        profile_src: 'https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        last_online: '50 minutes ago',
        messages: [{
            name: 'abdul sami',
            date: '10 days ago',
            message: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'abdul sami',
            date: '6 days ago',
            message: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '1 day ago',
            message: 'praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'abdul sami',
            date: '4 hour ago',
            message: 'how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '1 hour ago',
            message: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'abdul sami',
            date: '55 minutes ago',
            message: 'idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '30 minutes ago',
            message: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '10 minutes ago',
            message: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'abdul sami',
            date: '55 minutes ago',
            message: 'idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }]
    }, {
        states: 'unread',
        user: 'arsalan',
        profile_src: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        last_online: '16 hour ago',
        messages: [{
            name: 'arsalan',
            date: '10 days ago',
            message: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'arsalan',
            date: '6 days ago',
            message: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '1 day ago',
            message: 'praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'arsalan',
            date: '4 hour ago',
            message: 'how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '1 hour ago',
            message: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'arsalan',
            date: '55 minutes ago',
            message: 'idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '30 minutes ago',
            message: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '10 minutes ago',
            message: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        },]
    }, {
        states: 'friend',
        user: 'ayout katbar',
        profile_src: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        last_online: '18 days ago',
        messages: [{
            name: 'ayout katbar',
            date: '10 days ago',
            message: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'ayout katbar',
            date: '6 days ago',
            message: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '1 day ago',
            message: 'praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'ayout katbar',
            date: '4 hour ago',
            message: 'how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '1 hour ago',
            message: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'ayout katbar',
            date: '55 minutes ago',
            message: 'idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '30 minutes ago',
            message: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '10 minutes ago',
            message: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        },]
    }, {
        states: 'friend',
        user: 'imran ahmed',
        profile_src: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
        last_online: '18 days ago',
        messages: [{
            name: 'imran ahmed',
            date: '10 days ago',
            message: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'imran ahmed',
            date: '6 days ago',
            message: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '1 day ago',
            message: 'praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'imran ahmed',
            date: '4 hour ago',
            message: 'how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '1 hour ago',
            message: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'imran ahmed',
            date: '55 minutes ago',
            message: 'idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '30 minutes ago',
            message: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        }, {
            name: 'faisal qurashi',
            date: '10 minutes ago',
            message: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,'
        },]
    }]
}

export default function Friends(setChat) {
    const [Filter_slider, setFilter_slider] = useState('0%')
    const [User, setUser] = useState('Friends')
    const [Slider, setSlider] = useState()
    useEffect(() => {
        document.getElementById('Back_Btn').addEventListener('click', function () {
            setSlider()
        })
    })

    const filter = (e) => {
        if (e.target.checked == true) {
            setFilter_slider('104%')
        } else {
            setFilter_slider('0%')
        }
    }
    const Filter_user = (e) => {
        setUser(e.target.innerText)
        setFilter_slider('0%')
        document.getElementById('filter_inbox').checked = false;
    }

    return (
        <>
            <section className={styles.main} id={Slider}>
                <div className={styles.header}>
                    <span>
                        <input placeholder='Search' />
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </span>
                    <label htmlFor='filter_inbox'>
                        <input className={styles.filter_input} onChange={filter} type={'checkbox'} id='filter_inbox'></input>
                        <FontAwesomeIcon className={styles.filter_icon_inbox} icon={faSliders}></FontAwesomeIcon>
                    </label>
                </div>
                <div className={styles.friends_section}>
                    <div className={styles.friends}>
                        <h4>{User}</h4>
                        {inbox.chats.map((chat) => {
                            const last_message = chat.messages;
                            const slider = (e) => {
                                setSlider(styles.slider_on)
                                setChat.setChat(chat)
                            }
                            useEffect(() => {
                                if (last_message[last_message.length - 1].name == inbox.name) {
                                    document.getElementById(chat.user).style.display = 'initial';
                                };
                            })
                            return (
                                <div className={styles.friend} onClick={slider} key={chat.user}>
                                    <figure style={{ background: 'url(' + chat.profile_src + ')' }}></figure>
                                    <div>
                                        <span>
                                            <h5>{chat.user}</h5>
                                            <p>{chat.last_online}</p>
                                        </span>
                                        <aside><p id={chat.user}>Me:</p><p>{last_message[last_message.length - 1].message}</p></aside>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.inbox_filter} style={{ bottom: Filter_slider }}>
                        <h5>Inbox Filter</h5>
                        <span>
                            <p onClick={Filter_user}><FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>Friends</p>
                            <p onClick={Filter_user}><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>Invites</p>
                            <p onClick={Filter_user}><FontAwesomeIcon icon={faUserClock}></FontAwesomeIcon>Requests</p>
                            <p onClick={Filter_user}><FontAwesomeIcon icon={faEnvelopeOpen}></FontAwesomeIcon>UnRead</p>
                            <p onClick={Filter_user}><FontAwesomeIcon icon={faFileZipper}></FontAwesomeIcon>Achieve</p>
                            <p onClick={Filter_user}><FontAwesomeIcon icon={faUserSlash}></FontAwesomeIcon>Block</p>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}