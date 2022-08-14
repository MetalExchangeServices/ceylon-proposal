import Head from 'next/head'
import styles from '../../../styles/container/support-page-css/support.module.css'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import User from './component/User'
import Profiles_FandQ from './component/Profiles_FandQ'

export default function User_Report() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="developer" content="Aizazulah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ceylon Proposals | User_Report</title>
      </Head>
      <Navbar />
      <Filter />
      <main className={styles.home_main}>
        <div className={styles.porposals_section}>
          <User />
          <Profiles_FandQ hading={'Can`t find the suitable report you`re looking for?'} />
        </div>
        <div className={styles.advertisement_section}>
        </div>
      </main>
      <Footer />
    </>
  )
}