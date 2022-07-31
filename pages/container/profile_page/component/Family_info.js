import styles from '../../../../styles/container/profile-page-css/components/person_info.module.css'

export default function Family_info() {
    return(
        <>
        <section className={styles.Person_info}>
        <h4>Person Info</h4>
        <div>
            <span><p>Join Family</p><p>Separate</p></span>
            <span><p>Grand Father</p><p>Alive</p></span>
            <span><p>Grand Mother</p><p>Passed</p></span>
            <span><p>Father</p><p>Alive</p></span>
            <span><p>Mother</p><p>Alive</p></span>
            <span><p>Brothers</p><p>2</p></span>
            <span><p>Sister</p><p>1</p></span>
        </div>
        </section>
        </>
    )
}