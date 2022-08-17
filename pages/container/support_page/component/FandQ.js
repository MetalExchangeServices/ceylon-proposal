import Styles from '../../../../styles/container/support-page-css/components/fandq.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
const FandQs = [
    {
        question: 'How to signin in website',
        answer: 'there is a setting button in navbar so click it a pop pop open there is signin button so click it and you wil rediect to login page'
    }, {
        question: 'How to change language in website',
        answer: 'we provide our user there languages english , tumil amd sinhala and you can change through setting buton'
    }, {
        question: 'How to make my proposal',
        answer: 'first step is signin the website and second step is make your profile'
    }, {
        question: 'How to make our profile is your website',
        answer: 'there is a button in navbar of profile so click it and give the real detail it is nesasery'
    }, {
        question: 'Can service team can take action against the false information proposal',
        answer: 'if we know this proposal give fake information so your team take action and hide his proposal forever'
    }, {
        question: 'How to signin in website',
        answer: 'there is a setting button in navbar so click it a pop pop open there is signin button so click it and you wil rediect to login page'
    }, {
        question: 'How to change language in website',
        answer: 'we provide our user there languages english , tumil amd sinhala and you can change through setting buton'
    }, {
        question: 'How to make my proposal',
        answer: 'first step is signin the website and second step is make your profile'
    }, {
        question: 'How to make our profile is your website',
        answer: 'there is a button in navbar of profile so click it and give the real detail it is nesasery'
    }, {
        question: 'Can service team can take action against the false information proposal',
        answer: 'if we know this proposal give fake information so your team take action and hide his proposal forever'
    }
]

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
                        <Link href={'/container/support_page/Support'}><p>(FQs)</p></Link>
                        <Link href={'/container/support_page/Problem'}><p>(Reports)</p></Link>
                    </span>
                </div>
                <div className={Styles.FandQs}>
                    {FandQs.map((FandQ) => {
                        return (
                            <div className={Styles.FandQ}>
                                <span>
                                    <h5 onClick={FandQ_open} id={Styles.question}>{FandQ.question}</h5>
                                    <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                                </span>
                                <aside>{FandQ.answer}</aside>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}