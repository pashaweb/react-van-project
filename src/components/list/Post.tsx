import { PostProps } from './types';
import { useEffect, useState } from 'react';

export const Post = (props: PostProps) => {
  useEffect(() => {
    console.log(`Post ${props.id} useEffect`);
  }, []);
  return (
    <>
      <div>{props.title}</div>
      <div> {props.content}</div>
      <div> {props.published}</div>
    </>
  );
};
