'use client'
import React, { useState } from "react";
import styles from '../../../page.module.css';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';



export const dynamic = 'force-dynamic'; 

 

export default  function AddPost(){
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
        redirect('/signin?callbackUrl=/dashboard/posts/add-post')
      }
  })

 
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const router = useRouter();

const handleTitleChange = (event) => {
    setTitle(event.target.value);
}

const handleContentChange = (event) => {
    setContent(event.target.value)
}

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
       await fetch('/api/add-post', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, content}) })
        router.refresh();

    } catch(error){
        console.log(error)
    }

    setTitle('');
    setContent('');
}
    return (
        <main className={styles.inputPage}>
        <Link href={'/dashboard/posts'} >View Feed</Link>
        <h1>Add Post</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="title">Title
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                    required
                />
            </label>
            <label htmlFor="content">Content
                <textarea
                    id="content"
                    name="content"
                    value={content}
                    onChange={handleContentChange}
                    required
                />
            </label>
            <button type="submit">Submit</button>
            <p>Thanks:{session?.user?.name}</p>
        </form>
        </main>
    )
}