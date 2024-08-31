import { Children, createContext, useState } from "react";

interface ContextValue {
  ids: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
}
const initialState: ContextValue = {
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
};
export const FavouritesContext = createContext(initialState);

interface Props {
  children: React.ReactNode;
}

const FavouritesContextProvider = ({ children }: Props) => {
  const [faouriteIds, setFavouriteIds] = useState<string[]>([]);

  const addFavourite = (id: string) => {
    setFavouriteIds((prev) => [...prev, id]);
  };

  const removeFavourite = (id: string) => {
    setFavouriteIds((prev) => prev.filter((favId) => favId !== id));
  };

  const value: ContextValue = {
    ids: faouriteIds,
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
