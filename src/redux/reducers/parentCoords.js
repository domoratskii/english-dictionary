import { GET_PARENT_COORDS } from "../constants";

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PARENT_COORDS:
      return payload;
    default:
      return state;
  }
};
