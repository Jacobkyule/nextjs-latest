'use client'
import '../globals.css';
import { usePathname } from 'next/navigation';
import styles from '../page.module.css';
import Link from "next/link";


const navs = [
    {
        name: 'Products',
        href: '/dashboard/products'
    },
    {
        name: 'Posts',
        href: '/dashboard/posts'
    }
];

const DashboardNavs = () => {
    const pathname = usePathname();
    return (
        <>
        <div className={styles.dashboardnav}>
            {navs.map((nav) =>{
                const isActive = pathname === nav.href;
                return (
                    <Link
                    className={isActive ? 'text-blue' : 'text-black'}
                    href={nav.href}
                    key={nav.name}
                    >
                        {nav.name}
                    </Link>
                )
            })}
         </div>
        </>
    )
}

export default DashboardNavs;