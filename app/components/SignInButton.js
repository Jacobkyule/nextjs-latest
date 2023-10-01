'use client'
import styles from '../page.module.css';
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Menu, Transition } from '@headlessui/react'

import {
  ArrowRightOnRectangleIcon,
  Cog8ToothIcon
} from '@heroicons/react/24/solid'

const SignInButton = () => {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        <Menu as='div'>
          <Menu.Button className={styles.menuButton}>
            {session?.user?.image ? (
              <div>
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  className={styles.profPhoto}
                  width={50}
                  height={50}
                />
              </div>
            ) : (
              <span>
                x
              </span>
            )}
          </Menu.Button>
          <Transition
            enter='transition duration-150 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-150 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Menu.Items className={styles.menuItems}>
              <div className={styles.profileInfo}>
                {session?.user?.image ? (
                  <div>
                    <Image
                      src={session.user.image}
                      alt={session.user.name}
                      width={50}
                      height={50}
                    />
                  </div>
                ) : (
                  <span>
                    x
                  </span>
                )}
                <div className={styles.user}>
                  <p>
                    {session.user.name || 'User name'}
                  </p>
                  <p>{session.user.email}</p>
                </div>
              </div>
              <Menu.Item>
                  <Link
                    href={'/profile'}
                    className={styles.profileSettings}
                  >
                    <Cog8ToothIcon className={styles.settingsIcon}/>
                    <span className={styles.settingsLink} >Manage Account</span>
                  </Link>
                
              </Menu.Item>
              <Menu.Item>
                  <button
                   className={styles.signOutButton}
                    onClick={() => signOut()}
                  >
                    <ArrowRightOnRectangleIcon className={styles.signOutIcon}/>
                    <span>Sign Out</span>
                  </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <button
          onClick={() => signIn()}
          className={styles.signIn}
        >
          Sign In
        </button>
      )}
    </>
  )
}

export default SignInButton