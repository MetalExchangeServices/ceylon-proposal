import styles from '../../../../styles/container/login-page-css/components/sign.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faGoogle, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

export default function Log() {
    const [Show, setShow] = useState(faEye)
    const [Type, SetType] = useState('password')

    const slideloginPage = () => {
        document.getElementById('section_login').style.top = '-25rem';
        document.getElementById('section_signup').style.top = '0rem';
    }
    const visibal_password = () => {
        if (Type === 'password') {
            SetType('text')
            setShow(faEyeSlash)
        } else {
            SetType('password')
            setShow(faEye)
        }
    }

    return (
        <>
            <section className={styles.sigin}>
                <h3>LOGIN</h3>
                <form className={styles.form}>
                    <div className={styles.email}>
                        <p>Email</p>
                        <span>
                            <input placeholder='Example@gmail.com'/>
                        </span>
                    </div>
                    <div className={styles.password}>
                        <p>Password</p>
                        <span>
                            <input type={Type} placeholder='Enter Password'/>
                            <FontAwesomeIcon icon={Show} onClick={visibal_password}></FontAwesomeIcon>
                        </span>
                        <div className={styles.remember_me}>
                            <input type='checkbox' id='remember_me'/>
                            <label htmlFor='remember_me'><p>Remember me?</p></label>
                        </div>
                    </div>
                    <div className={styles.login_button}>
                        <button>LOGIN</button>
                        <p>Forgot Password?</p>
                    </div>
                </form>
                <div className={styles.or_option}>
                    <p>OR</p>
                    <span></span>
                </div>
                <div className={styles.social_account}>
                    <span><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></span>
                </div>
                <div className={styles.switch}><p>Need an account?</p><p onClick={slideloginPage}>SIGN UP</p></div>
            </section>
        </>
    )
}