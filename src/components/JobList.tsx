import JobListItem from './JobListItem';
import Spinner from './Spinner.tsx';
import type { SearchResultsProps } from '../types/index.ts';
import { useJobId } from '../hooks/useJobId.ts';

export function JobList({ searchResults, isLoading }: SearchResultsProps) {
  const jobId = useJobId();
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
