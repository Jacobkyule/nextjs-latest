import styles from '../page.module.css'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Image from 'next/image'

const ProfilePage = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/signin?callbackUrl=/profile')
  }

  return (
    <section>
      <div className={styles.profile}>
        <h1>Profile</h1>
        <Image 
        src={session?.user?.image} 
        alt={session?.user?.name}
        width={100}
        height={100}
        />
        <p>User-Name: { session?.user?.name }</p>
        <p>Email: { session?.user?.email }</p>
      </div>
    </section>
  )
}

export default ProfilePage