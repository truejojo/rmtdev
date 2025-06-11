import JobItemContent from './JobItemContent';
import Sidebar from './Sidebar';
import type { SearchResultsProps } from '../types.ts';

export default function Container({ searchResults }: SearchResultsProps) {
  return (
    <div className='container'>
      <Sidebar searchResults={searchResults} />
      <JobItemContent />
    </div>
  );
}
