import JobListItem from './JobListItem';
import Spinner from './Spinner.tsx';
import type { SearchResultsProps } from '../types/index.ts';
import { useJobIdContext } from '../hooks/useJobIdContext.ts';

export function JobList({ searchResults, isLoading }: SearchResultsProps) {
  const { jobId } = useJobIdContext();

  return (
    <>
      {isLoading && <Spinner />}

      {!isLoading && (
        <ul className='job-list'>
          {searchResults.map((jobItem) => (
            <JobListItem
              key={jobItem.id}
              jobItem={jobItem}
              isActive={jobId === jobItem.id}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default JobList;
