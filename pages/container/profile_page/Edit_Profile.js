import Head from 'next/head'
import styles from '../../../styles/container/profile-page-css/profile.module.css'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Edit_Basic_Profile from './component/Edit_Basic_Profile'
import Edit_Profile_media from './component/Edit_Profile_media'
import Edit_Person_info from './component/Edit_Person_info'
import Edit_Parent_info from './component/Edit_Parent_Info'
import Edit_Family_info from './component/Edit_Family_info'
import Edit_Bio_profile from './component/Edit_Bio_profile'

export default function Edit_Profile() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="developer" content="Aizazulah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ceylon Proposals | Profile</title>
      </Head>
      <Navbar/>
      <Filter/>
      <main className={styles.profile}>
        <div className={styles.basic_profile}>
          <Edit_Basic_Profile/>
          <Edit_Bio_profile/>
        </div>
        <div className={styles.detailed_profile}>
          <Edit_Profile_media/>
          <Edit_Person_info/>
          <Edit_Family_info/>
          <div className={styles.parent_profile}>
            <Edit_Parent_info title={'Father'}/>
            <Edit_Parent_info title={'Mother'}/>
          </div>
        </div>
        <div className={styles.adds_section}><p>123</p></div>
      </main>
      <Footer/>
    </>
  )
}