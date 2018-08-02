import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers/index";
import getSearchWord from "./middlewares/getSearchWord";
import getSearchOffers from "./middlewares/getSearchOffers";
import getSearchOptions from "./middlewares/getSearchOptions";
import getParentCoords from "./middlewares/getParentCoords";

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  withDevTools(
    applyMiddleware(
      getSearchOffers,
      getSearchOptions,
      getSearchWord,
      getParentCoords
    )
  )
);

export default store;
