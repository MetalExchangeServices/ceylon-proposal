import styles from '../../../../styles/container/profile-page-css/components/person_info.module.css'
var invalidChars = ["-", "+", "e","."];

export default function Edit_Family_info() {
    return (
        <>
            <section className={styles.Person_info}>
                <h4>Person Info</h4>
                <div>
                    <span><p>Join Family</p><input placeholder='Seperate or Join' /></span>
                    <span><p>Grand Father</p><input placeholder='Dead or Alive' /></span>
                    <span><p>Grand Mother</p><input placeholder='Dead or Alive' /></span>
                    <span><p>Father</p><input placeholder='Dead or Alive' /></span>
                    <span><p>Mother</p><input placeholder='Dead or Alive' /></span>
                    <span><p>Brothers</p><input placeholder='Quantity' type={'number'} className={styles.only_num} onKeyDown={(e) => {
                        if (invalidChars.includes(e.key)) {
                            e.preventDefault();
                        }
                    }} /></span>
                    <span><p>UnMarried Sister</p><input placeholder='Quantity' type={'number'} className={styles.only_num} onKeyDown={(e) => {
                        if (invalidChars.includes(e.key)) {
                            e.preventDefault();
                        }
                    }} /></span>
                </div>
            </section>
        </>
    )
}