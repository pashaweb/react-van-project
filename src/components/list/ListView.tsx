import { Post } from './Post';
import { useListHook } from './ListHook';
import styles from './list.module.css';
export const ListView = () => {
  const [veiwPosts] = useListHook();
  return (
    <ul className={styles.vansList}>
      {veiwPosts.map((post) => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
};
