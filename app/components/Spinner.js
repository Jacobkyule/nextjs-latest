import styles from '../page.module.css'
export default function Spinner(){
    return (
        <>
        <div className={styles.spinnerBody}>
        <div className={styles.loader}>
        <div  className={styles.spinner}></div>
        </div>
        </div>
        </>
    )
}