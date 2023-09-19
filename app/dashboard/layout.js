import DashboardNavs from "../components/dashboardNavs"
export default function DashboardLayout({
    children, 
  }) {
    return (
      <section>
        <nav>
        <hr />
        <DashboardNavs/>
        </nav>
   
        {children}
      </section>
    )
  }