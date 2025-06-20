import { useContext } from 'react';
import { BookmarkContext } from '../context/BookmarkProvider';

export const useBookmarkContext = () => {
  const constext = useContext(BookmarkContext);

  if (!constext) {
    throw new Error('BookmarkContext is not available');
  }

  return constext;
};
