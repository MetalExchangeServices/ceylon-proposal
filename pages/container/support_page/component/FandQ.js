import Styles from '../../../../styles/container/support-page-css/components/fandq.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function FandQ() {
    const FandQ_open = (e) => {
        if (e.target.parentElement.parentElement.getAttribute('id') === Styles.FandQ_open) {
            e.target.parentElement.parentElement.setAttribute('id', '');
        } else {
            e.target.parentElement.parentElement.setAttribute('id', Styles.FandQ_open);
        }
    }

    return (
        <>
            <section className={Styles.main}>
                <div className={Styles.hadding}>
                    <h3>Help Center For Our Customer</h3>
                    <span>
                        <Link href={'/container/support_page/Support'}><p>(F&Qs)</p></Link>
                        <Link href={'/container/support_page/Problem'}><p>(Reports)</p></Link>
                    </span>
                </div>
                <div className={Styles.FandQs}>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <aside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</aside>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <aside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</aside>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <aside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</aside>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <aside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</aside>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <aside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</aside>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <aside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</aside>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <aside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</aside>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <aside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</aside>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <aside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</aside>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <aside>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</aside>
                    </div>
                </div>
            </section>
        </>
    )
}