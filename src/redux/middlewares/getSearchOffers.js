import { GET_SEARCH_OFFERS } from "../constants";

export default store => next => action => {
  const { type, payload: word } = action;
  if (type !== GET_SEARCH_OFFERS) return next(action);
  if (!word) return next({ ...action, payload: [] });
  fetch(`https://dictionary.skyeng.ru/api/public/v1/words/search?search=${word}&pageSize=10`)
    .then(res => res.json())
    .then(offers => next({ ...action, payload: offers }));
};