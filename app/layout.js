import styles from '../app/page.module.css';
import Navbar from "./components/Navigation";

export const metadata = {
  title: 'jakes',
  description : "created by jake with next.js 13",
  robots: "index,follow",
  googlebot: "index,follow",
  google: "translate",
  theme_color: "#ffffff"
   
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <h1 className={styles.title}>Portfolio</h1>
      <Navbar/>
      {children}
      </body>
    </html>
  )
}