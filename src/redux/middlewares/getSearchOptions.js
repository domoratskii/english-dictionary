import { GET_SEARCH_OPTIONS } from "../constants";
import getIndexesOptions from "./../../helpers/getIndexesOptions";
import getImagesOptions from "./../../helpers/getImagesOptions";
import transformOptions from "./../../helpers/transformOptions";
import combineImagesWithOptions from "./../../helpers/combineOptionsWithImages";

export default store => next => action => {
  const { type, payload: options } = action;
  if (type !== GET_SEARCH_OPTIONS) return next(action);
  const imagesList = getImagesOptions(options);
  const indexesList = getIndexesOptions(options);
  fetch(`https://dictionary.skyeng.ru/api/public/v1/meanings?ids=${indexesList}`)
    .then(res => res.json())
    .then(options => next({ ...action, payload: transformOptions(combineImagesWithOptions(imagesList, options)) }));
};