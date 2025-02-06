import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavouriteMealIds(currentFavIds => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavouriteMealIds(currentFavIds =>
      currentFavIds.filter(mealId => mealId !== id)
    );
  }

  const value = {
    ids: favouriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
