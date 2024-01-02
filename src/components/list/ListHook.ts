import { useEffect, useReducer, useRef, useState } from 'react';
import { TPost } from './types';

type TAction =
  | {
      type: 'ADD' | 'UPDATE';
      payload: TPost;
    }
  | {
      type: 'ADD_ALL';
      payload: TPost[];
    };

type TReducer = (state: TPost[], action: any) => TPost[];
const reducer: TReducer = (state, action: TAction) => {
  switch (action.type) {
    case 'ADD_ALL':
      return [...state, ...action.payload];
    case 'ADD':
      return [...state, action.payload];
    case 'UPDATE':
      const updatePostIndex = state.findIndex(
        (post) => post.id === action.payload.id
      );
      const updatePost = state[updatePostIndex];
      updatePost.title = action.payload.title;
      const newPosts = [...state];
      newPosts[updatePostIndex] = updatePost;
      return newPosts;
    default:
      return state;
  }
};

export function useListHook() {
  const [posts, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'ADD_ALL', payload: data });
      });
  }, []);
  return { posts };
}
