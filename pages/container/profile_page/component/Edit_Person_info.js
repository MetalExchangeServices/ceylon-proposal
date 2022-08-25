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
            <span><p>University</p><input placeholder='Name of university'/></span>
            <span><p>Degree</p><input placeholder='Name of degree'/></span>
            <span><p>Graduation</p><input placeholder='Complete or Progress'/></span>
        </div>
        <div>
            <h5>Residency</h5>
            <span><p>Country</p><input placeholder='Name of Country'/></span>
            <span><p>State</p><input placeholder='Country of state'/></span>
            <span><p>City</p><input placeholder='State of city'/></span>
            <span><p>Zip Code</p><input placeholder='Optional'/></span>
        </div><div>
            <h5>Habits</h5>
            <span><p>Drinking</p><input placeholder='Daily or Weekly or Monthly'/></span>
            <span><p>Smoking</p><input placeholder='Daily or Weekly or Monthly'/></span>
            <span><p>Food Preference</p><input placeholder='vegetarian or None'/></span>
        </div>
        </section>
        </>
    )
}