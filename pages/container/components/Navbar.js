import style from '../../../styles/container/components-css/navbar.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort, faBars, faGear, faLanguage, faCaretDown, faIdCard, faRepeat, faRightFromBracket, faRightToBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [Language, setLanguage] = useState('English');
  const [LanguageField, setLanguageField] = useState('');
  const [Navbar, setNavbar] = useState(style.navbar_on);
  const [Language_select, setLanguage_select] = useState('none')

  useEffect(() => {
    window.addEventListener('scroll', navbar)
  })

  const language_f = () => {
    if (LanguageField === '') {
      setLanguageField(style.language_on)
    } else {
      setLanguageField('')
    }
  }
  const language = (e) => {
    setLanguage(e.target.innerText)
    setLanguage_select('none')
  }
  const language_select = () => {
    setLanguage_select('flex')
  }
  const Filter_tab = (e) => {
    if (e.target.checked === false) {
      document.getElementById('filter_box').style.left = '-100vw'
    } else {
      document.getElementById('filter_box').style.left = 0;
    }
  }
  const navbar = () => {
    if (scrollY) {
      setNavbar(style.navbar_off)
      setLanguageField('')
      document.getElementById('language').checked = false;
    } else {
      setNavbar(style.navbar_on)
    }
  }


  return (
    <>
      <nav className={style.navbar_body} id={Navbar}>
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
          <div>
            <label htmlFor='language'>
              <input className={style.language} type={'checkbox'} onChange={language_f} id='language'></input>
              <FontAwesomeIcon className={style.language_icon} icon={faGear}></FontAwesomeIcon>
            </label>
            <div className={style.languages_select} id={LanguageField}>
              <div className={style.language_section}>
                <h5><FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>Language</h5>
                <span onClick={language_select}>{Language}<FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></span>
                <div style={{display: Language_select}}>
                  <p onClick={language}>English</p>
                  <p onClick={language}>Tamil</p>
                  <p onClick={language}>Sinhala</p>
                </div>
              </div>
              <div className={style.Account}>
                <h5><FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon>Account</h5>
                <div>
                  <button><FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>SignIn</button>
                  <button><FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>LogIn</button>
                  <button><FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon>Switch</button>
                  <button><FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>LogOut</button>
                </div>
              </div>
            </div>
          </div>
          <label className={style.filter_icon} htmlFor='filter'>
            <input onChange={Filter_tab} className={style.filter} type={'checkbox'} id='filter'></input>
            <FontAwesomeIcon className={style.filter_icon} icon={faArrowDownWideShort}></FontAwesomeIcon>
          </label>
        </div>
      </nav>
    </>
  )
}