import styles from '../../../../styles/container/home-page-css/components/pagenavigate.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState, useContext } from 'react'
import { Page_navigation } from '../Home'


export default function Pagenavigate() {
    const page_navigation = useContext(Page_navigation)
    // console.log(page_navigation)
    const [Curpage, setCurpage] = useState(0)
    const [First_page_nav, setFirst_page_nav] = useState('none')
    const [Last_page_nav, setLast_page_nav] = useState('none')
    useEffect(() => {
        if (Curpage == 0) {
            setFirst_page_nav('none')
        } else {
            setFirst_page_nav('flex')
        };
        if (Curpage > page_navigation?.pages?.length - 4) {
            setLast_page_nav('none')
        } else {
            setLast_page_nav('flex')
        }
    },[page_navigation?.pages, Curpage])

    return (
        <>
            <section className={styles.Pagenavigate}>
                <span style={{display: First_page_nav}}
                 className={styles.pages_first}
                  onClick={(e) => { page_navigation?.setCurrentpage(e.target.innerText);
                   setCurpage(e.target.innerText - 1) }}>{page_navigation?.pages[0]}</span>
                <FontAwesomeIcon style={{display: First_page_nav}} onClick={() => {
                    if (!Curpage == 0) {
                        page_navigation?.setCurrentpage(Curpage)
                        setCurpage(Curpage - 1)
                    }
                }} icon={faLeftLong}></FontAwesomeIcon>
                {page_navigation?.pages?.slice(Curpage, page_navigation?.pages?.length).map((page, index) => {
                    return (
                        <p key={index} onClick={(e) => {page_navigation?.setCurrentpage(e.target.innerText); setCurpage(e.target.innerText - 1) }}>{page}</p>
                    )
                })}
                <FontAwesomeIcon style={{display: Last_page_nav}} onClick={() => {
                    if (Curpage < page_navigation.pages?.length - 1) {
                        page_navigation?.setCurrentpage(Curpage + 2)
                        setCurpage(Curpage + 1)
                    }
                }} icon={faRightLong}></FontAwesomeIcon>
                <span style={{display: Last_page_nav}} onClick={(e) => { page_navigation?.setCurrentpage(e.target.innerText); setCurpage(e.target.innerText - 1)}}>{page_navigation?.pages?.length}</span>
            </section>
        </>
    )
}