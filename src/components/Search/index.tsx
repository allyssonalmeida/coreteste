import React from 'react';
import SearchIcon from '../../Icons/SearchIcon';

import './index.scss';

const Search: React.FC = () => {
  return (
    <div className="search">
      <form className="search__form">
        <input type="text" className="search__input" placeholder="O que você está procurando ?"/>
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default Search;