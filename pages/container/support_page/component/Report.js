import Styles from '../../../../styles/container/support-page-css/components/report.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faCircleXmark, faUpload } from '@fortawesome/free-solid-svg-icons';
const report = [{
    id: 'report1',
    hadding: 'You have login issue',
    problems: [{
        id: 'lable1',
        problem: 'you are unable to see login page'
    }, {
        id: 'lable2',
        problem: 'you account is not login'
    }, {
        id: 'lable3',
        problem: 'you password show incorrect but it correct'
    }]
}, {
    id: 'report2',
    hadding: 'You have problem in payment',
    problems: [{
        id: 'lable1',
        problem: 'the payment page is not looding'
    }, {
        id: 'lable2',
        problem: 'they can not do payment because it show some thing went wrong'
    }, {
        id: 'lable3',
        problem: 'you card-id and card-cvc show incorrect but it correct'
    }, {
        id: 'lable4',
        problem: 'the money will cut from your bank but website show you did not pay'
    }]
}, {
    id: 'report3',
    hadding: 'Our team can not contect you',
    problems: [{
        id: 'lable1',
        problem: 'team can not verify your proposal'
    }, {
        id: 'lable2',
        problem: 'team can not contect you they will pass two days'
    }]
}, {
    id: 'report4',
    hadding: 'Did website has problem',
    problems: [{
        id: 'lable1',
        problem: 'it can take too long time'
    }, {
        id: 'lable2',
        problem: 'it can not be reponsive in your device'
    }, {
        id: 'lable3',
        problem: 'proposal are not showing'
    }, {
        id: 'lable4',
        problem: 'your contect is not showing'
    }]
}, {
    id: 'report5',
    hadding: 'Our team can not contect you',
    problems: [{
        id: 'lable1',
        problem: 'team can not verify your proposal'
    }, {
        id: 'lable2',
        problem: 'team can not contect you they will pass two days'
    }]
}]

export default function Report() {
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
                                        <label htmlFor={report.id + problem.id} key={report.id}>
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