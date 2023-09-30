import styles from './page.module.css'
import Spinner from "./components/Spinner"
export default function HomePageLoader(){
    return(
        <div className={styles.spinnerBody}>
        <Spinner/>
        </div>
    )
}