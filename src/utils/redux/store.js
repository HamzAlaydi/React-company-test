import { createStore } from "redux";
import imagesPerPageReducer from "./reducers/imagesPerPage";
import searchValue from "./reducers/searchValue";
import favoriteReducer from "./reducers/favorite";
import { combineReducers } from "redux";

// const store = combineReducers({ imagesPerPageReducer, searchValue });
const store = createStore(
  combineReducers({ imagesPerPageReducer, searchValue, favoriteReducer })
);

export default store;
