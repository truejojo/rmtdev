import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { BookmarkContextType } from '../types';

export const BookmarkContext = createContext<BookmarkContextType | null>(null);

const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookmarks, setBookmarks] = useLocalStorage<number[]>('bookmarks', []);

  const toggleBookmark = (id: number) =>
    bookmarks.includes(id)
      ? setBookmarks(bookmarks.filter((bookmark) => bookmark !== id))
      : setBookmarks([...bookmarks, id]);

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;
