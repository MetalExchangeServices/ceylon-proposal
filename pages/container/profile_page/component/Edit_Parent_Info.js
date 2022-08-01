import styles from '../../../../styles/container/profile-page-css/components/parent_Info.module.css'

export default function Edit_Parent_info() {
    return(
        <>
        <section className={styles.Parent_info}>
        <h4>Father</h4>
        <div>
            <span><p>Name</p><input/></span>
            <span><p>Caste</p><input/></span>
            <span><p>Country Of Resigent</p><input/></span>
            <span><p>Age</p><input/></span>
            <span><p>Religion</p><input/></span>
            <span><p>Profession</p><input/></span>
        </div>
        </section>
        </>
    )
}