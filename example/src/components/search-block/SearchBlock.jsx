import React from 'react';
import './search-block.css';

export const SearchBlock = () => {
  return (
    <div className="search-block">
      <input
        className="text-input"
        onChange={(event) => console.log(event.target.value)}
      />
      <button>Search</button>
    </div>
  );
};
