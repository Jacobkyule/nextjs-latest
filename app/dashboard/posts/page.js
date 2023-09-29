import Post from '@/app/components/post';
import styles from '../../page.module.css'
import prisma from '@/lib/prisma';
import Link from 'next/link';

export const dynamic = 'force-dynamic'; 

async function getPosts(){
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return posts;
}

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <>
    <div className={styles.homepage} >
    <div className={styles.feed}>  
    <Link href={'/dashboard/posts/add-post'}>Add Post</Link>
    <h1>Feed</h1>
    {
      posts.map((post) => {
        return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author.name}
            />
        )
      })
    }
    </div>
    </div>
   </>
  )
}