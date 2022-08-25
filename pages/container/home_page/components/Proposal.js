import styles from '../../../../styles/container/home-page-css/components/porposal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Proposal(prop) {
  useEffect(() => {
    if (prop.basic_profile?.proposal_verified == 'unverify') {
      setUnverify(styles.unverify)
    }
  },[prop.basic_profile])
  const [Image, setImage] = useState(prop.image?.image_src1)
  const [Unverify, setUnverify] = useState('')
  const Proposal = prop.basic_profile?.name

  return (
    <>
      <main className={styles.proposal}>
        <figure style={{background: 'url('+Image+')'}}>
            <div className={styles.img_top}>
                <FontAwesomeIcon className={styles.verify} id={Unverify} icon={faCircleCheck}></FontAwesomeIcon>
                <p>{prop.basic_profile?.profession}</p>
                <Link href={'/container/support_page/User_problem'}><FontAwesomeIcon className={styles.report} icon={faExclamationCircle}></FontAwesomeIcon></Link>
            </div>
            <div className={styles.image_changer}>
                <span onClick={(e) => {setImage(prop.image?.image_src1); e.target.style.background = 'var(--light-blue)'; e.target.nextSibling.style.background = 'var(--grey)'; e.target.nextSibling.nextSibling.style.background = 'var(--grey)'}}></span>
                <span onClick={(e) => {setImage(prop.image?.image_src2); e.target.style.background = 'var(--light-blue)'; e.target.nextSibling.style.background = 'var(--grey)'; e.target.previousSibling.style.background = 'var(--grey)'}}></span>
                <span onClick={(e) => {setImage(prop.image?.image_src3); e.target.style.background = 'var(--light-blue)'; e.target.previousSibling.style.background = 'var(--grey)'; e.target.previousSibling.previousSibling.style.background = 'var(--grey)'}}></span>
            </div>
        </figure>
        <div className={styles.basic_info}>
            <span className={styles.name}>
                <p>Name</p>
                <h3>{prop.basic_profile?.name}</h3>
            </span>
            <span className={styles.country}>
                <p>Country</p>
                <h3>{prop.basic_profile?.country}</h3>
            </span>
        </div>
        <aside>{prop.about?.about_text}</aside>
        <div className={styles.button}>
            <Link href={`/container/profile_page/Proposal_${Proposal}`}><button>More Info</button></Link>
        </div>
      </main>
    </>
  )
}