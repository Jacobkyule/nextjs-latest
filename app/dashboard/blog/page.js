import styles from '../../page.module.css';
import Link from 'next/link';

const posts = [
    {
      id: 1,
      title: 'Post 1',
      slug: 'post-1',
      content: 'jakes story explained'
    },
    {
      id: 2,
      title: 'Post 2',
      slug: 'post-2',
      content: 'jeezy joe has a story too'
    }
    // Add more post objects as needed
  ];


export default function Blog(){
    
        return (
            <>
            <div className={styles.blogPage}>
            <h2>These are the blogs</h2>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <Link href={`/dashboard/blog/${post.slug}`}>{post.title}</Link>
                  <p>{post.content}</p>
                </li>
              ))}
            </ul>
            </div>
            </>
          )
            
}