import JobList from './JobList';
import PaginationControls from './PaginationControls';
import ResultsCount from './ResultsCount';
import SortingControls from './SortingControls';
import type { SearchResultsProps } from '../types.ts';

export default function Sidebar({ searchResults }: SearchResultsProps) {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <ResultsCount />
        <SortingControls />
      </div>

      <JobList searchResults={searchResults} />
      <PaginationControls />
    </div>
  );
}
