import { useEffect, useRef, useState } from 'react';
import { TPost } from './types';

export function useListHook() {
  const posts = useRef<TPost[]>([]);
  const [veiwPosts, setVeiwPosts] = useState<TPost[]>(posts.current);

  useEffect(() => {
    const time = setTimeout(() => {
      const updatePostIndex = posts.current.findIndex(
        (post) => post.id === '1'
      );
      const updatePost = posts.current[updatePostIndex];
      updatePost.title = 'Prisma is the best';
      const newPosts = [...posts.current];
      newPosts[updatePostIndex] = updatePost;
      console.log(newPosts);
      posts.current = newPosts;
      setVeiwPosts(newPosts);
    }, 2000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  useEffect(() => {
    const time = setTimeout(() => {
      posts.current = [
        ...posts.current,
        {
          id: '1',
          title: 'Prisma is the best',
          content: '[Prisma]',
          published: false,
        },
      ];
      setVeiwPosts(posts.current);
    }, 500);

    return () => {
      clearTimeout(time);
    };
  }, []);
  return [veiwPosts];
}
