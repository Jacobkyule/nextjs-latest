import styles from '../../../page.module.css';
import Spinner from "@/app/components/Spinner"
export default function SelectedProductLoader(){
    return (
        <div className={styles.spinnerBody}>
        <Spinner/>
        </div>
    )
}