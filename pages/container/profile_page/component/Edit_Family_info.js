import styles from '../../../../styles/container/profile-page-css/components/person_info.module.css'

export default function Edit_Family_info() {
    return(
        <>
        <section className={styles.Person_info}>
        <h4>Person Info</h4>
        <div>
            <span><p>Join Family</p><input/></span>
            <span><p>Grand Father</p><input/></span>
            <span><p>Grand Mother</p><input/></span>
            <span><p>Father</p><input/></span>
            <span><p>Mother</p><input/></span>
            <span><p>Brothers</p><input/></span>
            <span><p>Sister</p><input/></span>
        </div>
        </section>
        </>
    )
}