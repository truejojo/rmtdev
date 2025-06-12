import JobList from './JobList';
import PaginationControls from './PaginationControls';
import ResultsCount from './ResultsCount';
import SortingControls from './SortingControls';
import type { SearchResultsProps } from '../types/index.ts';

export default function Sidebar({
  searchResults,
  isLoading,
}: SearchResultsProps) {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <ResultsCount />
        <SortingControls />
      </div>

      <JobList searchResults={searchResults} isLoading={isLoading} />
      <PaginationControls />
    </div>
  );
}
