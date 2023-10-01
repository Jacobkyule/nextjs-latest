import styles from '../page.module.css'
import DashboardNavs from "../components/dashboardNavs"
export default function DashboardLayout({children}) 
{
    return (
      <section className={styles.dashboard}>
        <DashboardNavs/>
        {children}
      </section>
    )
  }