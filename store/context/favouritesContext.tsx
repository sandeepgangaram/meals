import { createContext, useState } from "react";

interface ContextValue {
  favouriteIds: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
}

export const FavouritesContext = createContext<ContextValue>({
  favouriteIds: [],
  addFavourite: (id: string) => {},
  removeFavourite: (id: string) => {},
});

interface Props {
  children: React.ReactNode;
}

const FavouritesContextProvider = ({ children }: Props) => {
  const [favouriteIds, setFavouriteIds] = useState<string[]>([]);

  const addFavourite = (id: string) => {
    setFavouriteIds((prev) => [...prev, id]);
  };

  const removeFavourite = (id: string) => {
    setFavouriteIds((prev) => prev.filter((favId) => favId !== id));
  };

  const value: ContextValue = {
    favouriteIds,
    addFavourite,
    removeFavourite,
  };
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
