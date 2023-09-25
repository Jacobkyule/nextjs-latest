'use client'

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import styles from '../page.module.css';
export default function DashboardPage() {
  const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
        redirect('/signin?callbackUrl=/dashboard')
      }
  })

    return (
    <>
    <div className={styles.dashboardPage}>
    <h2>You are logged in as:</h2>
        <p>{session?.user?.name}</p>
    </div>
    </>
    )
  }