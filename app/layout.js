import Provider from './components/Provider';
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
    <html lang="en"
    >
      <body>
      <Provider>
      <h1 className={styles.title}>Portfolio</h1>
      <Navbar/>
      <main className={styles.main}>{children}</main>
      </Provider>
      </body>
    </html>
  )
}