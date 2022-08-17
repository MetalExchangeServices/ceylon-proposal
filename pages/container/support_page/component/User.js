import Styles from '../../../../styles/container/support-page-css/components/report.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faCircleXmark, faUpload } from '@fortawesome/free-solid-svg-icons';
const report = [{
    id: 'report1',
    hadding: 'False information',
    problems: [{
        id: 'lable1',
        problem: 'proposal information is false'
    }, {
        id: 'lable2',
        problem: 'fake video'
    }, {
        id: 'lable3',
        problem: 'profile image is fake'
    }]
}, {
    id: 'report2',
    hadding: 'threatening',
    problems: [{
        id: 'lable1',
        problem: 'Physical threatening'
    }, {
        id: 'lable2',
        problem: 'messages threatening'
    }, {
        id: 'lable3',
        problem: 'use different account to threatening'
    }]
}, {
    id: 'report3',
    hadding: 'Disturbing you',
    problems: [{
        id: 'lable1',
        problem: 'Spaming'
    }, {
        id: 'lable2',
        problem: 'fake report on you'
    }]
}, {
    id: 'report4',
    hadding: 'Prank and other lies',
    problems: [{
        id: 'lable1',
        problem: 'fake identity'
    }, {
        id: 'lable2',
        problem: 'prank you'
    }, {
        id: 'lable3',
        problem: 'use other element'
    }, {
        id: 'lable4',
        problem: 'false information'
    }]
}]

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
                    {report.map((report) => {
                        return (
                            <div className={Styles.FandQ} key={report.id}>
                                <span>
                                    <h5 onClick={FandQ_open}>{report.hadding}</h5>
                                    <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                                </span>
                                {report.problems.map((problem) => {
                                    return (
                                        <label htmlFor={report.id + problem.id}>
                                            <input type={'radio'} name={report.id} id={report.id + problem.id} />
                                            <aside>{problem.problem}</aside>
                                        </label>
                                    )
                                })}
                                <button><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>Send Report</button>
                            </div>
                        )
                    })}

                </div>
            </section>
        </>
    )
}