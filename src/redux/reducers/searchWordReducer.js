import { GET_SEARCH_WORD } from "../constants";

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SEARCH_WORD:
      return payload;
    default:
      return state;
  }
};
