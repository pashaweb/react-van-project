import { PostProps, TPost } from './types';
import Stars from '@/components/stars/Stars';

export const Post = (props: TPost) => {
  const rate = Math.floor(Math.random() * 5);
  return (
    <>
      <h2>{props.title}</h2>
      <p> {props.body}</p>
      <Stars count={5} initialRate={rate} />
    </>
  );
};
