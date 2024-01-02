import { Post } from './Post';
import { useListHook } from './ListHook';
import styles from './list.module.css';
export const ListView = () => {
  const { posts } = useListHook();
  return (
    <>
      <ul className={styles.vansList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.vansListItem}>
            <Post {...post} />
          </li>
        ))}
      </ul>
    </>
  );
};
