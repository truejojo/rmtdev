import { forwardRef } from 'react';
import Spinner from './Spinner';
import { useBookmarkContext } from '../hooks/useBookmarkContext';
import { useJobItems } from '../hooks/useJobItems';
import JobList from './JobList';
import { createPortal } from 'react-dom';

const BookmarksPopover = forwardRef<HTMLDivElement>((_, ref) => {
  const { bookmarks } = useBookmarkContext();
  const { jobItmes, isLoading } = useJobItems(bookmarks);

  return createPortal(
    <div ref={ref} className='bookmarks-popover'>
      {isLoading && <Spinner />}

      {!isLoading && <JobList searchResults={jobItmes} isLoading={false} />}
    </div>,
    document.body,
  );
});

export default BookmarksPopover;
