import styles from '../../../../styles/container/profile-page-css/components/parent_Info.module.css'

export default function Parent_info() {
    return(
        <>
        <section className={styles.Parent_info}>
        <h4>Father</h4>
        <div>
            <span><p>Name</p><p>Rayz</p></span>
            <span><p>Caste</p><p>Qurashi</p></span>
            <span><p>Residence</p><p>Canada</p></span>
            <span><p>Age</p><p>54 Year</p></span>
            <span><p>Religion</p><p>Christan</p></span>
            <span><p>Profession</p><p>Police Officer</p></span>
        </div>
        </section>
        </>
    )
}