import Image from 'next/image'
import hero from '../public/Jakes logo.png'
import styles from './page.module.css'
export default function Home() {
  return (
    <>
    <div className={styles.homepage} >
    <Image
      className={styles.hero}
      fill
      src={hero}
      priority
      alt='logo'
    />
    <h1 className={styles.heading}>Hey, im Jacob Kyule.</h1>
    <p className={styles.description}>A talented software developer from Nairobi, KENYA.</p>
    </div>
   </>
  )
}