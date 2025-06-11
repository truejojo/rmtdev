import BookmarksButton from './BookmarksButton';
import Logo from './Logo';
import SearchForm from './SearchForm';
import type { SearchFormProps } from '../types.ts';

export default function Header({ searchText, setSearchText }: SearchFormProps) {
  return (
    <header className='header'>
      <div className='header__top'>
        <Logo />
        <BookmarksButton />
      </div>

      <SearchForm searchText={searchText} setSearchText={setSearchText} />
    </header>
  );
}
