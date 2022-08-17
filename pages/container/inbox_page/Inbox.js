import Head from 'next/head'
import styles from '../../../styles/container/inbox-page-css/inbox.module.css'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Friends from './component/Friends'
import Chats from './component/Chats'
import { useState } from 'react'

export default function Inbox() {
  const [Chat, setChat] = useState('')

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="developer" content="Aizazulah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ceylon Proposals | Inbox</title>
      </Head>
      <section className={styles.main}>
        <Navbar/>
        <Filter/>
        <div className={styles.inbox}>
          <Friends setChat={setChat}/>
          <Chats Chat={Chat}/>
        </div>
      </section>
    </>
  )
}