import { useState } from 'react';

export default function SearchForm() {
  const [searchText, setSearchText] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchText('');
      }}
      action='#'
      className='search'
    >
      <button type='submit' title='submit'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>

      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        spellCheck='false'
        type='text'
        required
        placeholder='Find remote developer jobs...'
      />
    </form>
  );
}
