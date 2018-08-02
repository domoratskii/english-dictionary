import { combineReducers } from "redux";
import searchOffersReducer from "./searchOffersReducer";
import searchOptionsReducer from "./searchOptionsReducer";
import searchWordReducer from "./searchWordReducer";
import speechCodesReducer from "./speechCodesReducer";
import parentCoords from "./parentCoords";

export default combineReducers({
  offers: searchOffersReducer,
  options: searchOptionsReducer,
  searchWord: searchWordReducer,
  speechCodes: speechCodesReducer,
  parentCoords: parentCoords
});
