import Head from 'next/head'
import styles from '../../../styles/container/ads-page-css/ads.module.css'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Packages from './components/Packages'
import Benefits from './components/Benefit'


export default function Ads() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="developer" content="Aizazulah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ceylon Proposals | Advertisement</title>
      </Head>
      <main className={styles.packages_page}>
        <Navbar/>
        <Filter/>
        <Packages/>
        <Benefits/>
        <Footer/>
      </main>
    </>
  )
}