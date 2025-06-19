import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import { useBookmarkContext } from '../hooks/useBookmarkContext';

export default function BookmarkIcon({ id }: { id: number }) {
  const { bookmarks, toggleBookmark } = useBookmarkContext();

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
