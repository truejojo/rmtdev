import { useState } from 'react';
import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import { HeaderTop } from './Header';
import BookmarksButton from './BookmarksButton';
import Logo from './Logo';
import SearchForm from './SearchForm';
import JobItemContent from './JobItemContent';
import Sidebar from './Sidebar';
import { SidebarTop } from './Sidebar';
import JobList from './JobList';
import PaginationControls from './PaginationControls';
import ResultsCount from './ResultsCount';
import SortingControls from './SortingControls';
import { useSearchResults } from '../hooks/useSearchResults';
import { Toaster } from 'react-hot-toast';
import { MAX_RESULTS_PER_PAGE } from '../constants';
import { SortTypeProps, PaginationDirectionProps } from '../types';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState<SortTypeProps>('relevant');
  const [searchText, setSearchText] = useState('');
  const { searchResults, isLoading } = useSearchResults(searchText);

  const maxPages = searchResults
    ? searchResults.length / MAX_RESULTS_PER_PAGE
    : 0;
  const searchResultsCount = searchResults?.length || 0;

  const searchResultsSorted =
    searchResults?.sort((a, b) =>
      sortType === 'relevant'
        ? b.relevanceScore - a.relevanceScore
        : b.daysAgo - a.daysAgo,
    ) || [];

  const searchResultsSortedAndLimited =
    searchResultsSorted?.slice(
      (currentPage - 1) * MAX_RESULTS_PER_PAGE,
      currentPage * MAX_RESULTS_PER_PAGE,
    ) || [];

  const handlePaginationControls = (direction: PaginationDirectionProps) => {
    direction === 'previous'
      ? setCurrentPage((prevPage) => prevPage - 1)
      : setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSortingControls = (sortType: SortTypeProps) => {
    setCurrentPage(1);
    sortType === 'relevant' ? setSortType('relevant') : setSortType('recent');
  };

  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount searchResultsCount={searchResultsCount} />
            <SortingControls
              onClick={handleSortingControls}
              sortType={sortType}
            />
          </SidebarTop>

          <JobList
            searchResults={searchResultsSortedAndLimited}
            isLoading={isLoading}
          />
          <PaginationControls
            onClick={handlePaginationControls}
            currentPage={currentPage}
            maxPages={maxPages}
          />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
      <Toaster position='top-center' />
    </>
  );
}

export default App;
