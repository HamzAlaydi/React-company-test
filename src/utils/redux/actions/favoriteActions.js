import { ADDFAVORITE, DELETEALLFAVORITE } from "./favoriteTypes";

export const addFavorite = (v) => {
  return { type: ADDFAVORITE, value: v };
};

export const deleteAllFavorite = () => {
  return { type: DELETEALLFAVORITE };
};
