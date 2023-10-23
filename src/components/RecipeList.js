import React from 'react';
import { useEffect } from 'react';

function RecipeList({ receipe, favoritedItems, onItemClick, onFavorite , onSearch , childProp}) {
  //On first render it will show result for dummy state value as query.
  useEffect(() => {
    onSearch(childProp);
}, [childProp]);
  return (
    <div className='recipe'>
      {receipe.length > 0 && childProp ? <h1>Healthy Receipes</h1> : <h1>Search results:</h1>}
      <div className="data-grid">
        {receipe.map((recipe) => (
          <div key={recipe.recipe.label} className="grid-item" onClick={() => onItemClick(recipe)}>
            <img src={recipe.recipe.image} alt="" />
            <p>{recipe.recipe.label}</p>
            <button
              className={`heart-button ${favoritedItems.some((item) => item.uri === recipe.recipe.uri) ? 'active' : ''}`}
              onClick={(e) => onFavorite(e, recipe.recipe)}
            >
              {favoritedItems.some((item) => item.uri === recipe.recipe.uri) ? '❤️' : '🤍'}
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default RecipeList;
