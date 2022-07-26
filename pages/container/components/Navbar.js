import style from '../../../styles/container/components-css/navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faArrowDownWideShort, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [Language, setLanguage] = useState('English');
  const [LanguageField, setLanguageField] = useState('');
  const language_f = () => {
    if (LanguageField === '') {
      setLanguageField(style.language_on)
    } else {
      setLanguageField('')
    }
  }
  const language = (e) => {
    setLanguage(e.target.innerText)
  }
  const Filter_tab = (e) => {
    if (e.target.checked === false) {
      document.getElementById('filter_box').style.left = '-100vw'
    } else {
      document.getElementById('filter_box').style.left = 0;
    }
  }

  return (
    <>
      <div className={style.navbar_body}>
        <div className={style.nav_icons} id={style.menu_lable}>
          <label htmlFor='menu'>
            <input className={style.menu} onChange={Filter_tab} type={'checkbox'} id='menu'></input>
            <FontAwesomeIcon className={style.menu_icon} icon={faBars}></FontAwesomeIcon>
          </label>
        </div>
        <figure className={style.nav_logo}></figure>
        <div className={style.a_container}>
          <Link href='/container/home_page/Home'>
            <p>Home</p>
          </Link>
          <Link href='/container/profile_page/Profile'>
            <p>Profile</p>
          </Link>
          <Link href='/container/inbox_page/Inbox'>
            <p>Inbox</p>
          </Link>
          <Link href='/container/ads_page/Ads'>
            <p>Advertisement</p>
          </Link>
          <Link href='/container/support_page/Support'>
            <p>Support</p>
          </Link>
        </div>
        <div className={style.nav_icons}>
          <label htmlFor='language'>
            <input className={style.language} type={'checkbox'} onChange={language_f} id='language'></input>
            <FontAwesomeIcon className={style.language_icon} icon={faGlobe}></FontAwesomeIcon>
            <div className={style.languages_select} id={LanguageField}>
              <div></div> 
              <span className={style.language_hadding}>{Language}</span>
              <span className={style.language_container}>
                <p onClick={language}>English</p>
                <p onClick={language}>Tamil</p>
                <p onClick={language}>Sinhala</p>
              </span>
            </div>
          </label>
          <label className={style.filter_icon} htmlFor='filter'>
            <input onChange={Filter_tab} className={style.filter} type={'checkbox'} id='filter'></input>
            <FontAwesomeIcon className={style.filter_icon} icon={faArrowDownWideShort}></FontAwesomeIcon>
          </label>
        </div>
      </div>
    </>
  )
}