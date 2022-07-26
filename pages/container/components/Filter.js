import style from '../../../styles/container/components-css/filter.module.css';
import { useState } from 'react';
import Link from 'next/link';

export default function Filter() {
  const [Religion, setReligion] = useState('Christan');
  const [Country, setCountry] = useState('Canada');
  const [Profession, setProfession] = useState('Programmer');
  const [Sorting, setSorting] = useState('All');


const options_section = (e) => {
  e.target.nextSibling.style.display = 'initial';
}
  const religion =(e) => {
    setReligion(e.target.innerText)
    e.target.parentElement.style.display = 'none';
  }
  const country =(e) => {
    setCountry(e.target.innerText)
    e.target.parentElement.style.display = 'none';
  }
  const profession =(e) => {
    setProfession(e.target.innerText)
    e.target.parentElement.style.display = 'none';
  }
  const sorting =(e) => {
    setSorting(e.target.innerText)
    e.target.parentElement.style.display = 'none';
  }

  return (
    <>
      <div className={style.filter_body} id='filter_box'>
        <div className={style.filter_main}>
          <div className={style.filter_container}>
          <div className={style.a_container}>
          <span className={style.hadding}>Navigation</span>
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
            <span className={style.gender_tab}>
                <p className={style.hadding}>Gender</p>
              <span>
                <input type={'radio'} name='gender' id='male' defaultChecked/>
                <label htmlFor='male'>Male</label>
              </span>
              <span>
                <input type={'radio'} name='gender' id='female'></input>
                <label htmlFor='female'>Female</label>
              </span>
            </span>
            <span className={style.age_tab}>
            <p className={style.hadding}>Age</p>
            <span>
              <input type={'number'} placeholder='Min'></input>
              <input type={'number'} placeholder='Max'></input>
            </span>
            </span>
            <span className={style.religion_tab}>
              <p className={style.hadding}>Religion</p>
              <input value={Religion} onClick={options_section} readOnly/>
              <span className={style.options}>
                <p onClick={religion}>Islam</p>
                <p onClick={religion}>Christan</p>
                <p onClick={religion}>Budhisum</p>
                <p onClick={religion}>Other</p>
              </span>
            </span>
            <span className={style.religion_tab}>
              <p className={style.hadding}>Country</p>
              <input value={Country} onClick={options_section} readOnly/>
              <span className={style.options}>
                <p onClick={country}>Canada</p>
                <p onClick={country}>Usa</p>
                <p onClick={country}>Germany</p>
                <p onClick={country}>India</p>
              </span>
            </span>
            <span className={style.religion_tab}>
              <p className={style.hadding}>Profession</p>
              <input value={Profession} onClick={options_section} readOnly/>
              <span className={style.options}>
                <p onClick={profession}>Programmer</p>
                <p onClick={profession}>Designer</p>
                <p onClick={profession}>Shopkepper</p>
                <p onClick={profession}>other</p>
              </span>
            </span>
            <span className={style.religion_tab}>
              <p className={style.hadding}>Sorting</p>
              <input value={Sorting} onClick={options_section} readOnly/>
              <span className={style.options}>
                <p onClick={sorting}>ALL</p>
                <p onClick={sorting}>Newest</p>
                <p onClick={sorting}>Oldest</p>
                <p onClick={sorting}>Verifyed</p>
              </span>
            </span>
          </div>
          <button className={style.changes_btn}>Apply Changes</button>
        </div>
      </div>
    </>
  )
}