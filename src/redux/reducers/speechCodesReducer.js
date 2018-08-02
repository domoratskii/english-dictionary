import { GET_SPEECH_CODES } from "../constants";
import speechCodes from "./../../helpers/speechCodes";

export default (state = speechCodes, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SPEECH_CODES:
      return { payload };
    default:
      return state;
  }
};
