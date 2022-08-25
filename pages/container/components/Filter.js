import style from '../../../styles/container/components-css/filter.module.css';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Input from './Input';
import { Filter_api } from '../home_page/Home';

export default function Filter(prop) {
  const FilterData = useContext(Filter_api)
  const [Filter, setFilter] = useState('filter_box');
  var invalidChars = ["-", "+", "e","."];

  useEffect(() => {
    window.addEventListener('scroll', filter)
  });
  const filter = () => {
    if (scrollY) {
      setFilter(style.filter_off)
    } else {
      setFilter('filter_box')
    }
  };
  const gendar = (e) => {
    if (e.target.checked == true) {
      prop.setGender(e.target.value)
    }
  }

  return (
    <>
      <div className={style.filter_body} id={Filter}>
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
                <input type={'radio'} name='gender' id='male' value={'man'} onChange={gendar} />
                <label htmlFor='male'>man</label>
              </span>
              <span>
                <input type={'radio'} name='gender' id='female' value={'women'} onChange={gendar} />
                <label htmlFor='female'>women</label>
              </span>
            </span>
            <span className={style.age_tab}>
              <p className={style.hadding}>Age</p>
              <span>
                <input type={'number'} placeholder='Min' defaultValue={15} onKeyDown={(e) => {
                  if (invalidChars.includes(e.key)) {
                    e.preventDefault();
                  }
                }} onBlur={(e) => {
                  if (e.target.value > 14 & e.target.value < 100) {
                    prop.setMin_age(e.target.value)
                  } else {
                    alert('Min age should be between 15 to 99 other wise age will be defult')
                  }
                }}></input>
                <input type={'number'} placeholder='Max' defaultValue={99} onKeyDown={(e) => {
                  if (invalidChars.includes(e.key)) {
                    e.preventDefault();
                  }
                }} onBlur={(e) => {
                  if (e.target.value > 20 & e.target.value < 100) {
                    prop.setMax_age(e.target.value)
                  } else {
                    alert('Max age should be between 15 to 99 other wise age will be defult')
                  }
                }}></input>
              </span>
            </span>
            {(Array.isArray(FilterData) ? FilterData : []).map((e) => {
              return <Input key={e.title} api={e.api} title={e.title} set={e.set} />
            })}
          </div>
          <button className={style.changes_btn}>Apply Changes</button>
        </div>
      </div>
    </>
  )
}