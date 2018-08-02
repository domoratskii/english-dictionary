import { GET_SEARCH_OFFERS, GET_SEARCH_WORD } from "../constants";

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SEARCH_OFFERS:
      return payload;
    case GET_SEARCH_WORD:
      return [];
    default:
      return state;
  }
};
