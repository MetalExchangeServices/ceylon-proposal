import Head from 'next/head'
import styles from '../../../styles/container/home-page-css/home.module.css'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="developer" content="Aizazulah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ceylon Proposals | Home</title>
      </Head>
      <Navbar/>
      <Filter/>

    </>
  )
}