import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import { BookmarkContext } from '../context/BookmarkProvider';
import { useContext } from 'react';

export default function BookmarkIcon({ id }: { id: number }) {
  const constext = useContext(BookmarkContext);
  if (!constext) {
    throw new Error('BookmarkContext is not available');
  }
  const { bookmarks, toggleBookmark } = constext;

  const handleToggleBookmark = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    toggleBookmark(id);
  };

  return (
    <button
      onClick={handleToggleBookmark}
      type='button'
      className='bookmark-btn'
    >
      <BookmarkFilledIcon
        className={`${bookmarks.includes(id) ? 'filled' : ''}`}
      />
      {''}
    </button>
  );
}
