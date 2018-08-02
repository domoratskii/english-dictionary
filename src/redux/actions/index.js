import {GET_PARENT_COORDS, GET_SEARCH_OPTIONS, GET_SEARCH_WORD} from "../constants";
import {GET_SEARCH_OFFERS} from "../constants";

export const getSearchWord = word => ({ type: GET_SEARCH_WORD, payload: word });
export const getSearchOffers = word => ({type: GET_SEARCH_OFFERS, payload: word});
export const getSearchOptions = meanings => ({type: GET_SEARCH_OPTIONS, payload: meanings});
export const getParentCoords = node => ({type: GET_PARENT_COORDS, payload: node});