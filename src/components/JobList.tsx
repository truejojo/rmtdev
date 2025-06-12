import JobListItem from './JobListItem';
import Spinner from './Spinner.tsx';
import type { SearchResultsProps } from '../types/index.ts';

export function JobList({ searchResults, isLoading }: SearchResultsProps) {
  return (
    <>
      {isLoading && <Spinner />}

      {!isLoading && (
        <ul className='job-list'>
          {searchResults.map((jobItem) => (
            <JobListItem key={jobItem.id} jobItem={jobItem} />
          ))}
        </ul>
      )}
    </>
  );
}

export default JobList;
