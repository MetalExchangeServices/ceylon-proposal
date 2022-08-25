import styles from '../../../../styles/container/profile-page-css/components/parent_Info.module.css'

export default function Parent_info(prop) {
    return(
        <>
        <section className={styles.Parent_info}>
        <h4>{prop?.title}</h4>
        <div>
            <span><p>Name</p><p>{prop.Parent_info?.name}</p></span>
            <span><p>Residence</p><p>{prop.Parent_info?.resident}</p></span>
            <span><p>Age</p><p>{prop.Parent_info?.age}</p></span>
            <span><p>Religion</p><p>{prop.Parent_info?.religion}</p></span>
            <span><p>Profession</p><p>{prop.Parent_info?.profession}</p></span>
        </div>
        </section>
        </>
    )
}