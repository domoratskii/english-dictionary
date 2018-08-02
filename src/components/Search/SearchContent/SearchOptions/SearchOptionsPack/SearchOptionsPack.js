import React from "react";
import styles from "./SearchOptionsPack.css";
import SearchOption from "../SearchOption/SearchOption";

const SearchOptionsPack = ({ optionsPack }) => {
  return (
    <ul className={styles.list}>
      {optionsPack.map(option => (
        <SearchOption key={option.id} option={option} />
      ))}
    </ul>
  );
};

export default SearchOptionsPack;
