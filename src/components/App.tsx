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

function App() {
  const [searchText, setSearchText] = useState('');
  const { searchResults, isLoading } = useSearchResults(searchText);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = searchResults
    ? searchResults.length / MAX_RESULTS_PER_PAGE
    : 0;

  const searchResultsLimited =
    searchResults?.slice(
      (currentPage - 1) * MAX_RESULTS_PER_PAGE,
      currentPage * MAX_RESULTS_PER_PAGE,
    ) || [];
  const searchResultsCount = searchResults?.length || 0;

  const handleClick = (direction: 'previous' | 'next') => {
    if (direction === 'previous') {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (direction === 'next') {
      setCurrentPage((prevPage) => prevPage + 1);
    }
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
            <SortingControls />
          </SidebarTop>

          <JobList searchResults={searchResultsLimited} isLoading={isLoading} />
          <PaginationControls
            onClick={handleClick}
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
