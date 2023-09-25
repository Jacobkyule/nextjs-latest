import Image from 'next/image'
import hero from '../public/Jakes logo.png'
import styles from './page.module.css'
export default function Home() {
  return (
    <>
    <div className={styles.homepage} >
    <Image
      className={styles.Hero}
      fill
      src={hero}
      priority
      alt='logo'
    />
    </div>
   </>
  )
}