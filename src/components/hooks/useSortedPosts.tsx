import { useMemo } from 'react';
import { Post } from '@/redux-toolkit/models/postModel';

const useSortedPosts = (posts: Post[] = []) => { // Default to empty array
  return useMemo(() => {
    return (posts || []).slice().sort((a, b) => {
      const dateA = a.dateTime ? new Date(a.dateTime).getTime() : -Infinity;
      const dateB = b.dateTime ? new Date(b.dateTime).getTime() : -Infinity;
      return dateB - dateA;
    });
  }, [posts]);
};

export default useSortedPosts;