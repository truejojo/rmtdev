import JobItemContent from './JobItemContent';
import Sidebar from './Sidebar';
import type { SearchResultsProps } from '../types/index.ts';

export default function Container({
  searchResults,
  isLoading,
}: SearchResultsProps) {
  return (
    <div className='container'>
      <Sidebar searchResults={searchResults} isLoading={isLoading} />
      <JobItemContent />
    </div>
  );
}
