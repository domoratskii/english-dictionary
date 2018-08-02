import { GET_PARENT_COORDS } from "../constants";

export default store => next => action => {
  const { type, payload: node } = action;
  if (type !== GET_PARENT_COORDS) return next(action);
  if (!node) return next(action);
  const { top, left } = node.getBoundingClientRect();
  next({ ...action, payload: { top, left } });
};
