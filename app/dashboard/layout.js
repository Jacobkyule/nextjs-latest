import styles from '../page.module.css'
import DashboardNavs from "../components/dashboardNavs"
export default function DashboardLayout({children}) 
{
    return (
      <section className={styles.dashboard}>
        <DashboardNavs/>
        <hr className={styles.hr}/>
        {children}
      </section>
    )
  }