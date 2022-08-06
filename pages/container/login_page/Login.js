import Head from 'next/head'
import styles from '../../../styles/container/login-page-css/login.module.css'
import Log from './component/Log'
import Sign from './component/Sign'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function Login() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="developer" content="Aizazulah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ceylon Proposals | Login</title>
      </Head>
      <main className={styles.login_page}>
        <div className={styles.filter}></div>
        <div className={styles.login_container}>
          <section className={styles.section1} id='section_login'>
            <Log />
            <figure>
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </figure>
          </section>
          <section className={styles.section2} id='section_signup'>
            <Sign />
            <figure>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </figure>
          </section>
        </div>
      </main>
    </>
  )
}