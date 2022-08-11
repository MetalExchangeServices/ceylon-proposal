import styles from '../../../../styles/container/inbox-page-css/components/friends.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faSearch, faUserGroup, faUserPlus, faUserClock, faEnvelopeOpen, faUserSlash, faFileZipper } from '@fortawesome/free-solid-svg-icons'
import { useState ,useEffect } from 'react'

export default function Friends() {
    const [Filter_slider, setFilter_slider] = useState('0%')
    const [User, setUser] = useState('Friends')
    const [Slider, setSlider] = useState()
    useEffect(() => {
        document.getElementById('Back_Btn').addEventListener('click', function() {
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
    const slider = (e) => {
        setSlider(styles.slider_on)
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
                        <div className={styles.friend} onClick={slider}>
                            <figure>

                            </figure>
                            <div>
                                <span>
                                    <h5>Faisal Qurashi</h5>
                                    <p>Online</p>
                                </span>
                                <aside><p>Me:</p>Yes i can meet you bakery of sunshine and you can tell what is your problem</aside>
                            </div>
                        </div>
                        <div className={styles.friend} onClick={slider}>
                            <figure>

                            </figure>
                            <div>
                                <span>
                                    <h5>Faisal Qurashi</h5>
                                    <p>Online</p>
                                </span>
                                <aside><p>Me:</p>Yes i can meet you bakery of sunshine and you can tell what is your problem</aside>
                            </div>
                        </div>
                        <div className={styles.friend} onClick={slider}>
                            <figure>

                            </figure>
                            <div>
                                <span>
                                    <h5>Faisal Qurashi</h5>
                                    <p>Online</p>
                                </span>
                                <aside><p>Me:</p>Yes i can meet you bakery of sunshine and you can tell what is your problem</aside>
                            </div>
                        </div>
                        <div className={styles.friend} onClick={slider}>
                            <figure>

                            </figure>
                            <div>
                                <span>
                                    <h5>Faisal Qurashi</h5>
                                    <p>Online</p>
                                </span>
                                <aside><p>Me:</p>Yes i can meet you bakery of sunshine and you can tell what is your problem</aside>
                            </div>
                        </div>
                        <div className={styles.friend} onClick={slider}>
                            <figure>

                            </figure>
                            <div>
                                <span>
                                    <h5>Faisal Qurashi</h5>
                                    <p>Online</p>
                                </span>
                                <aside><p>Me:</p>Yes i can meet you bakery of sunshine and you can tell what is your problem</aside>
                            </div>
                        </div>
                        <div className={styles.friend} onClick={slider}>
                            <figure>

                            </figure>
                            <div>
                                <span>
                                    <h5>Faisal Qurashi</h5>
                                    <p>Online</p>
                                </span>
                                <aside><p>Me:</p>Yes i can meet you bakery of sunshine and you can tell what is your problem</aside>
                            </div>
                        </div>
                        <div className={styles.friend} onClick={slider}>
                            <figure>

                            </figure>
                            <div>
                                <span>
                                    <h5>Faisal Qurashi</h5>
                                    <p>Online</p>
                                </span>
                                <aside><p>Me:</p>Yes i can meet you bakery of sunshine and you can tell what is your problem</aside>
                            </div>
                        </div>
                    </div>
                    <div className={styles.inbox_filter} style={{bottom: Filter_slider}}>
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