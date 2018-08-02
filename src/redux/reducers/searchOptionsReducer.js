import { GET_SEARCH_OFFERS, GET_SEARCH_OPTIONS, GET_SEARCH_WORD } from "../constants";

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SEARCH_OPTIONS:
      return payload;
    case GET_SEARCH_OFFERS:
      return {};
    case GET_SEARCH_WORD:
      return [];
    default:
      return state;
  }
};