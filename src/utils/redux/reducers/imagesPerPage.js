import {
  TENIMAGESPERPAGE,
  TWENTYIMAGESPERPAGE,
  FIFTYIMAGESPERPAGE,
} from "../actions/ImagesPerPageTypes";

const initialState = { images: 10 };

export const imagesPerPageReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TENIMAGESPERPAGE:
      return { ...state, images: 10 };
      break;
    case TWENTYIMAGESPERPAGE:
      return { ...state, images: 20 };
      break;
    case FIFTYIMAGESPERPAGE:
      return { ...state, images: 50 };
      break;

    default:
      return state;
  }
};

export default imagesPerPageReducer;
