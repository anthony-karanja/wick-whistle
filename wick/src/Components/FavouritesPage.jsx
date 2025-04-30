import React from "react";
import RecipeCard from "./RecipeCard";

function FavouritesPage({ recipes, onFavoriteToggle, isSignedUp }) {
  const favoriteRecipes = recipes.filter((recipe) => recipe.isFavorite);

  if (!isSignedUp) {
    return (
      <div>
        <h1>Recipe Favorites</h1>
        <p>You need to sign up to view your favorite recipes!</p>
      </div>
    );
  }

  return (
    <>
      <h1>Recipe Favorites</h1>
      <div className="recipe-container">
        {favoriteRecipes.length > 0 ? (
          favoriteRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isSignedUp={isSignedUp}
              onFavoriteToggle={onFavoriteToggle}
            />
          ))
        ) : (
          <p>No favorites yet. Add some from the homepage!</p>
        )}
      </div>
    </>
  );
}

export default FavouritesPage;
