import styles from '../../../../styles/container/profile-page-css/components/parent_Info.module.css'
var invalidChars = ["-", "+", "e","."];

export default function Edit_Parent_info(prop) {
    return(
        <>
        <section className={styles.Parent_info}>
        <h4>{prop.title}</h4>
        <div>
            <span><p>Name</p><input placeholder='Enter Name'/></span>
            <span><p>Residence</p><input placeholder='Enter Country'/></span>
            <span><p>Age</p><input placeholder='Enter Age' type={'number'} className={styles.only_num} onKeyDown={(e) => {
                  if (invalidChars.includes(e.key)) {
                    e.preventDefault();
                  }}}/></span>
            <span><p>Religion</p><input placeholder='Enter Religion'/></span>
            <span><p>Profession</p><input placeholder='Enter Profession'/></span>
        </div>
        </section>
        </>
    )
}