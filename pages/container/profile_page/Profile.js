import Head from 'next/head'
import styles from '../../../styles/container/profile-page-css/profile.module.css'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Basic_Profile from './component/Basic_Profile'
import Profile_media from './component/Profile_media'
import Person_info from './component/Person_info'
import Parent_info from './component/Parent_info'
import Family_info from './component/Family_info'
import Bio_profile from './component/Bio_profile'

export default function Profile() {
    const father_info = { name: 'Rayz', resident: 'canada', age: '54 year', religion: 'islam', profession: 'police officer' };
    const mother_info = { name: 'halina', resident: 'germany', age: '50 year', religion: 'christan', profession: 'house wife' };
    const proposal_media = {
      image: { image_src1: 'https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', image_src2: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80', image_src3: 'https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
      video: { title: 'my name is Faisal', video_link: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-secured-attachments/message/attachments/71ef3be28373dc0a0899dd3ff2076d52-1657847847675/2022-07-15%2002-46-18?__cld_token__=exp=1660916163~hmac=024cbedf7f999d3e5362d906363af71c6ee9f685cb9ccada0e01a6a24881df4a' },
      pdf: { title: 'about my self PDF', pdf_link: 'https://fiverr-res.cloudinary.com/image/upload/f_pdf,q_auto/v1/secured-attachments/message/attachments/848f176f0c9a6eb755ececb8f68eec8c-1657602811023/app%20development%20banner.pdf?__cld_token__=exp=1660916163~hmac=119119c6eb81ea70a6c7d9a52d4d577d1e3074b3f0ceb07345b04e74cc22ad35' }
    }
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
          <Basic_Profile/>
          <Bio_profile/>
        </div>
        <div className={styles.detailed_profile}>
          <Profile_media proposal_media={proposal_media}/>
          <Person_info/>
          <Family_info/>
          <div className={styles.parent_profile}>
            <Parent_info title={'father'} Parent_info={father_info}/>
            <Parent_info title={'mother'} Parent_info={mother_info}/>
          </div>
        </div>
        <div className={styles.adds_section}><p>123</p></div>
      </main>
      <Footer/>
    </>
  )
}