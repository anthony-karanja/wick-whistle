import React from 'react'

function FavouritesPage({recipes}) {
    const favoriteRecipes = recipes
  
    return (
        <>
        <h1>Recipe Favorites</h1>
        <div className="recipe-container">        
          {favoriteRecipes.length > 0 ? (
            favoriteRecipes.map(recipe => (
              <RecipeCard 
              key={recipe.id} 
              recipe={recipe}
               />
            ))
          ) : (
            <p>No favorites yet. Add some from the homepage!</p>
          )}
        </div>
        </>
      );
 }

export default FavouritesPage
