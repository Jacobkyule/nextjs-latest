import styles from '../page.module.css'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

const ServerProtectedPage = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/signin?callbackUrl=/contacts')
  }

  return (
    <section className={styles.contacts}>
      <div>
        <h1>
          This is a <span>server-side</span>{' '}
          protected page
        </h1>
        <h2>You are logged in as:</h2>
        <p>{session?.user?.name}</p>
      </div>
    </section>
  )
}

export default ServerProtectedPage