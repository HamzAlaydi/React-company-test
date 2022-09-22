import { ADDSEARCHVALUE } from "./searchValueTypes";

export const addSearchValue = (v) => {
  return { type: ADDSEARCHVALUE, value: v };
};
