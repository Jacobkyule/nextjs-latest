'use client'
import styles from '../page.module.css'
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';


const GoogleSignInButton = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  return (
    <button
      onClick={() => signIn('google', { callbackUrl })}
      className={styles.googleSignIn}
    >
      Continue with Google
    </button>
  )
}

export default GoogleSignInButton;