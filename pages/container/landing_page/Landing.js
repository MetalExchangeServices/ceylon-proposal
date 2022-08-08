import Head from 'next/head'
import styles from '../../../styles/container/landing-page-css/landing.module.css'
import Images from './component/Images'
import Navbar from './component/Navbar'
import Content from './component/Content'


export default function Landing() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="developer" content="Aizazulah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ceylon Proposals</title>
      </Head>
      <section className={styles.landing_page}>
        <Images />
        <div className={styles.nav_con}>
          <Navbar />
          <Content />
        </div>
      </section>
    </>
  )
}