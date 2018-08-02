import { GET_SEARCH_WORD } from "../constants";

export default store => next => action => {
  const { type, payload } = action;
  if (type !== GET_SEARCH_WORD) return next(action);
  if (!payload.length) {
    const { imageUrl } = payload;
    return next({...action, payload: {...payload, imageUrl}});
  }
  const { id, imageUrl } = payload[0];
  fetch(`https://dictionary.skyeng.ru/api/public/v1/meanings?ids=${id}`)
    .then(res => res.json())
    .then(([searchWord]) => next({ ...action, payload: {...searchWord, imageUrl } }));
};
