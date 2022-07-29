import style from '../../../styles/container/components-css/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopyright} from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
    <>
    <footer className={style.footer}>
      <div className={style.footer_main}>
        <div className={style.logo_searchs}>
          <figure></figure>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
          <div>
          <span><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><input placeholder='Enter Email' className={style.email}/></span>
          <span><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon><input placeholder='Search User' className={style.user}/></span>
          </div>
        </div>
        <div className={style.footer_links}>
          <div>
            <h5>Social Media</h5>
            <Link href='#'>Facebook</Link>
            <Link href='#'>Facebook</Link>
            <Link href='#'>Facebook</Link>
            <Link href='#'>Facebook</Link>
            <Link href='#'>Facebook</Link>
          </div>
          <div>
            <h5>Social Media</h5>
            <Link href='#'>Facebook</Link>
            <Link href='#'>Facebook</Link>
            <Link href='#'>Facebook</Link>
            <Link href='#'>Facebook</Link>
            <Link href='#'>Facebook</Link>
          </div>
          <div>
            <h5>Social Media</h5>
            <Link href='#'>Facebook</Link>
            <Link href='#'>Facebook</Link>
            <Link href='#'>Facebook</Link>
            <Link href='#'>Facebook</Link>
            <Link href='#'>Facebook</Link>
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