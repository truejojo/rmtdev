import { useState, createContext, useEffect } from 'react';

type BookmarkContextType = {
  bookmarks: number[];
  toggleBookmark: (id: number) => void;
};

export const BookmarkContext = createContext<BookmarkContextType | null>(null);

const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  // warum einen function aufruf innerhalb von useState?
  // Damit der initiale Wert nur einmal gesetzt wird, wenn der Provider erstellt wird.
  const [bookmarks, setBookmarks] = useState<number[]>(() =>
    JSON.parse(localStorage.getItem('bookmarks') || '[]'),
  );

  const toggleBookmark = (id: number) => {
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter((bookmark) => bookmark !== id));
    } else {
      setBookmarks([...bookmarks, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;
