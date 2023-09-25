import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

const Page = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/signin?callbackUrl=/profile')
  }

  return (
    <section>
      <div>
        <h1>Profile</h1>
      </div>
    </section>
  )
}

export default Page