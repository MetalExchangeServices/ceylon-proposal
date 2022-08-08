import styles from '../../../../styles/container/profile-page-css/components/person_info.module.css'

export default function Edit_Person_info() {
    return(
        <>
        <section className={styles.Person_info}>
        <div>
            <h5>Person Info</h5>
            <span><p>Created By</p></span>
        </div>
        <div>
            <h5>Education</h5>
            <span><p>University</p><input/></span>
            <span><p>Degree</p><input/></span>
            <span><p>Graduation</p><input/></span>
        </div>
        <div>
            <h5>Residency</h5>
            <span><p>Country</p><input/></span>
            <span><p>State</p><input/></span>
            <span><p>City</p><input/></span>
            <span><p>Zip Code</p><input/></span>
        </div><div>
            <h5>Habits</h5>
            <span><p>Drinking</p><input/></span>
            <span><p>Smoking</p><input/></span>
            <span><p>Food Preference</p><input/></span>
        </div>
        </section>
        </>
    )
}