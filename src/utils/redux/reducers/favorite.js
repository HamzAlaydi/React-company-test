import { ADDFAVORITE, DELETEALLFAVORITE } from "../actions/favoriteTypes";

const initialState = { favorite: [] };

const favoriteReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADDFAVORITE:
      return { ...state, favorite: actions.value };
      break;
    case DELETEALLFAVORITE:
      return { ...state, favorite: [] };
      break;

    default:
      return state;
      break;
  }
};
export default favoriteReducer;
