import JobListItem from './JobListItem';
import type { SearchResultsProps } from '../types.ts';

export function JobList({ searchResults }: SearchResultsProps) {
  return (
    <ul className='job-list'>
      {searchResults.map((jobItem) => (
        <JobListItem key={jobItem.id} jobItem={jobItem} />
      ))}
    </ul>
  );
}

export default JobList;
