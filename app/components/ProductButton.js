'use client'
import { useRouter } from "next/navigation";
import styles from '../page.module.css';

export default function ProductButton({id}){
    const router = useRouter();

    function handleClick(){
        router.push(`/dashboard/products/${id}`)

    }
    return (
        <button
        className={styles.mybtn}
        onClick={handleClick}
        >
            Go To Product
        </button>
    )
}