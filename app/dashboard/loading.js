import styles from '../page.module.css';
import Spinner from "../components/Spinner"
export default function DashboardLoader(){
    return (
        <div className={styles.spinnerBody}>
        <Spinner/>
        </div>
    )
}