import style from '../../../styles/container/components-css/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopyright} from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Content_api from '../../api/content_api';

export default function Footer() {
  const Content = Content_api.Website_info
  const Social_media = Content_api.Website_social_link

    return (
    <>
    <footer className={style.footer}>
      <div className={style.footer_main}>
        <div className={style.logo_searchs}>
          <figure></figure>
          <p>{Content.website_discription}</p>
          <div>
          <span><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><input placeholder='Enter Email' className={style.email}/></span>
          <span><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon><input placeholder='Search User' className={style.user}/></span>
          </div>
        </div>
        <div className={style.footer_links}>
          <div>
            <h5>Social Media</h5>
            <Link href={Social_media.facebook}>Facebook</Link>
            <Link href={Social_media.twitter}>Twitter</Link>
            <Link href={Social_media.instagram}>Instagram</Link>
            <Link href={Social_media.tiktok}>Tiktok</Link>
            <Link href={Social_media.snapchat}>Snapchat</Link>
          </div>
          <div>
            <h5>Pages</h5>
            <Link href={'/container/landing_page/Landing'}>Home Page</Link>
            <Link href={'/container/home_page/Home'}>Proposal page</Link>
            <Link href={'/container/profile_page/Profile'}>Profile Page</Link>
            <Link href={'/container/login_page/Login'}>Account Page</Link>
            <Link href={'/container/inbox_page/Inbox'}>Inbox Page</Link>
            <Link href='#'>Deshboard page</Link>
            <Link href={'/container/support_page/Support'}>F&Q page</Link>
            <Link href={'/container/support_page/Problem'}>Report page</Link>
          </div>
          <div>
            <h5>Support</h5>
            <Link href='#'>How to make account?</Link>
            <Link href='#'>How to run my ads?</Link>
            <Link href='#'>How to make profile?</Link>
            <Link href='#'>How to recover account?</Link>
            <Link href='#'>how to contect?</Link>
            <Link href='#'>how to report?</Link>
            <Link href='#'>where is login page?</Link>
            <Link href='#'>how to use?</Link>
          </div>
        </div>
      </div>
      <div className={style.footer_rights}>
        <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
        <p>All Rights Reserve By Ceylon Porporsal</p>
      </div>
    </footer>
    </>
  )
}