'use client'
import '../globals.css';
import { usePathname } from 'next/navigation';
import styles from '../page.module.css';
import React from "react";
import Link from "next/link";

const navLinks = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Dashboard',
        href: '/dashboard'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Contacts',
        href: '/contacts'
    }
  ];

const Navbar =  () => {
    const pathname = usePathname();
    return (
    <>
    <div className={styles.navbar}>
    {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
            <Link
            className={isActive ? 'text-blue' : 'text-black'}
            href={link.href}
            key={link.name}
            >
            {link.name}
            </Link>
        )
    })}
    </div>
   </>
    )

    
}
export default Navbar;