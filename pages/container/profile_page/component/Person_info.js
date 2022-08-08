import styles from '../../../../styles/container/profile-page-css/components/person_info.module.css'

export default function Person_info() {
    return(
        <>
        <section className={styles.Person_info}>
        <div>
            <h5>Person Info</h5>
            <span><p>Created By</p><p>12/7/2022</p></span>
        </div>
        <div>
            <h5>Education</h5>
            <span><p>University</p><p>University of alberta</p></span>
            <span><p>Degree</p><p>mechanical Engineering</p></span>
            <span><p>Graduation</p><p>Progress</p></span>
        </div>
        <div>
            <h5>Residency</h5>
            <span><p>Country</p><p>Canada</p></span>
            <span><p>State</p><p>Alberta</p></span>
            <span><p>City</p><p>Camrose</p></span>
            <span><p>Zip Code</p><p>T1G1E7</p></span>
        </div><div>
            <h5>Habits</h5>
            <span><p>Drinking</p><p>Monthly</p></span>
            <span><p>Smoking</p><p>No</p></span>
            <span><p>Food Preference</p><p>Vegetarian</p></span>
        </div>
        </section>
        </>
    )
}