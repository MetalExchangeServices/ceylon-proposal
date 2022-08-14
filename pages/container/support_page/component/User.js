import Styles from '../../../../styles/container/support-page-css/components/report.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faCircleXmark, faUpload } from '@fortawesome/free-solid-svg-icons';

export default function User() {
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
                        <label htmlFor='report1-lable1'>
                            <input type={'radio'} name='report' id='report1-lable1' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report1-lable2'>
                            <input type={'radio'} name='report' id='report1-lable2' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report1-lable3'>
                            <input type={'radio'} name='report' id='report1-lable3' />
                            <aside>Lorem Ipsum is simply</aside>
                        </label>
                        <label htmlFor='report1-lable4'>
                            <input type={'radio'} name='report' id='report1-lable4' />
                            <aside>Lorem Ipsum is simply dummy text of the printing</aside>
                        </label>
                        <button><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>Send Report</button>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <label htmlFor='report2-lable1'>
                            <input type={'radio'} name='report' id='report2-lable1' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report2-lable2'>
                            <input type={'radio'} name='report' id='report2-lable2' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report2-lable3'>
                            <input type={'radio'} name='report' id='report2-lable3' />
                            <aside>Lorem Ipsum is simply</aside>
                        </label>
                        <label htmlFor='report2-lable4'>
                            <input type={'radio'} name='report' id='report2-lable4' />
                            <aside>Lorem Ipsum is simply dummy text of the printing</aside>
                        </label>
                        <button><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>Send Report</button>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <label htmlFor='report2-lable1'>
                            <input type={'radio'} name='report' id='report2-lable1' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report2-lable2'>
                            <input type={'radio'} name='report' id='report2-lable2' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report2-lable3'>
                            <input type={'radio'} name='report' id='report2-lable3' />
                            <aside>Lorem Ipsum is simply</aside>
                        </label>
                        <label htmlFor='report2-lable4'>
                            <input type={'radio'} name='report' id='report2-lable4' />
                            <aside>Lorem Ipsum is simply dummy text of the printing</aside>
                        </label>
                        <button><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>Send Report</button>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <label htmlFor='report3-lable1'>
                            <input type={'radio'} name='report' id='report3-lable1' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report3-lable2'>
                            <input type={'radio'} name='report' id='report3-lable2' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report3-lable3'>
                            <input type={'radio'} name='report' id='report3-lable3' />
                            <aside>Lorem Ipsum is simply</aside>
                        </label>
                        <label htmlFor='report3-lable4'>
                            <input type={'radio'} name='report' id='report3-lable4' />
                            <aside>Lorem Ipsum is simply dummy text of the printing</aside>
                        </label>
                        <button><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>Send Report</button>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <label htmlFor='report4-lable1'>
                            <input type={'radio'} name='report' id='report4-lable1' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report4-lable2'>
                            <input type={'radio'} name='report' id='report4-lable2' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report4-lable3'>
                            <input type={'radio'} name='report' id='report4-lable3' />
                            <aside>Lorem Ipsum is simply</aside>
                        </label>
                        <label htmlFor='report4-lable4'>
                            <input type={'radio'} name='report' id='report4-lable4' />
                            <aside>Lorem Ipsum is simply dummy text of the printing</aside>
                        </label>
                        <button><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>Send Report</button>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <label htmlFor='report5-lable1'>
                            <input type={'radio'} name='report' id='report5-lable1' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report5-lable2'>
                            <input type={'radio'} name='report' id='report5-lable2' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report5-lable3'>
                            <input type={'radio'} name='report' id='report5-lable3' />
                            <aside>Lorem Ipsum is simply</aside>
                        </label>
                        <label htmlFor='report5-lable4'>
                            <input type={'radio'} name='report' id='report5-lable4' />
                            <aside>Lorem Ipsum is simply dummy text of the printing</aside>
                        </label>
                        <button><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>Send Report</button>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <label htmlFor='report6-lable1'>
                            <input type={'radio'} name='report' id='report6-lable1' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report6-lable2'>
                            <input type={'radio'} name='report' id='report6-lable2' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report6-lable3'>
                            <input type={'radio'} name='report' id='report6-lable3' />
                            <aside>Lorem Ipsum is simply</aside>
                        </label>
                        <label htmlFor='report6-lable4'>
                            <input type={'radio'} name='report' id='report6-lable4' />
                            <aside>Lorem Ipsum is simply dummy text of the printing</aside>
                        </label>
                        <button><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>Send Report</button>
                    </div>
                    <div className={Styles.FandQ}>
                        <span>
                            <h5 onClick={FandQ_open}>Lorem Ipsum is simply dummy text of the printing?</h5>
                            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </span>
                        <label htmlFor='report7-lable1'>
                            <input type={'radio'} name='report' id='report7-lable1' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report7-lable2'>
                            <input type={'radio'} name='report' id='report7-lable2' />
                            <aside>Lorem Ipsum is simply dummy text</aside>
                        </label>
                        <label htmlFor='report7-lable3'>
                            <input type={'radio'} name='report' id='report7-lable3' />
                            <aside>Lorem Ipsum is simply</aside>
                        </label>
                        <label htmlFor='report7-lable4'>
                            <input type={'radio'} name='report' id='report7-lable4' />
                            <aside>Lorem Ipsum is simply dummy text of the printing</aside>
                        </label>
                        <button><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>Send Report</button>
                    </div>
                </div>
            </section>
        </>
    )
}