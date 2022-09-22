import { ADDSEARCHVALUE } from "../actions/searchValueTypes";

const initialState = { search: "tree" };

const searchValue = (state = initialState, actions) => {
  switch (actions.type) {
    case ADDSEARCHVALUE:
      return { ...state, search: actions.value };
      break;

    default:
      return state;
      break;
  }
};

export default searchValue;
