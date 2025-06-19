import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type BookmarkContextType = {
  bookmarks: number[];
  toggleBookmark: (id: number) => void;
};

export const BookmarkContext = createContext<BookmarkContextType | null>(null);

const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookmarks, setBookmarks] = useLocalStorage<number[]>('bookmarks', []);

  const toggleBookmark = (id: number) => {
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter((bookmark) => bookmark !== id));
    } else {
      setBookmarks([...bookmarks, id]);
    }
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;
