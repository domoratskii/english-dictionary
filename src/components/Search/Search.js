import React from "react";
import style from "./Search.css";

const Search = ({ children }) => {
  return <div className={style["search-wrapper"]}>{children}</div>;
};

export default Search;
