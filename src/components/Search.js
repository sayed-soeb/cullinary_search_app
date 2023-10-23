// Search.js
import React, { useState } from 'react';

function Search({ onSearch, showFavorites, handleFavourite , updateParentState }) {
  const [query, setQuery] = useState('');
  
//If query if empty them dummy will remain same else dummy will be null
  const handleSearch = () => {
    if(query===null){
      updateParentState('healthy');
    }
    onSearch(query);
    updateParentState(null);
  };

  

  return (
    <div className="filter">
      <div className="contain">
        <div className='icon'>
        <img src='https://w7.pngwing.com/pngs/94/603/png-transparent-chef-s-uniform-cook-computer-icons-restaurant-cooking-thumbnail.png' alt='' />
        <div className='app-name'>
        <h3>Culinary Library</h3>
        </div>
        </div>
        <div className='search'>
        <div className="top-row">
          <input placeholder='Search Your Recipe' type='text' name='search' value={query} onChange={e => setQuery(e.target.value)} />
        </div>
        <div className="bottom-row">
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="bottom-fav">
          <button onClick={handleFavourite}>{showFavorites ? 'Hide Favorites' : 'Show Favourites'}</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
