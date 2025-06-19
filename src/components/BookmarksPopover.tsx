import Spinner from './Spinner';
import { useBookmarkContext } from '../hooks/useBookmarkContext';
import { useJobItems } from '../hooks/useJobItems';
import JobList from './JobList';

const BookmarksPopover = () => {
  const { bookmarks } = useBookmarkContext();
  const { jobItmes, isLoading } = useJobItems(bookmarks);

  return (
    <div className='bookmarks-popover'>
      {isLoading && <Spinner />}

      {!isLoading && <JobList searchResults={jobItmes} isLoading={false} />}
    </div>
  );
};

export default BookmarksPopover;
