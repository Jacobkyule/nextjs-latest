import styles from '../app/page.module.css';
import Navbar from "./components/Navigation";

export const metadata = {
  title: 'jakes',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <h1 className={styles.title}>Hello, Next.js!</h1>
      <Navbar/>
      {children}
      </body>
    </html>
  )
}