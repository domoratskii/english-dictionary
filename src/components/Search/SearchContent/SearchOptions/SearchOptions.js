import React from "react";
import styles from "./SearchOptions.css";
import SearchOptionsPack from "./SearchOptionsPack/SearchOptionsPack";

const SearchOptions = ({ options, speechCodes }) => {
  return (
    <div className={styles.options}>
      {Object.keys(options).map(optionsPack => {
        const partOfSpeechCode = speechCodes[optionsPack];
        return (
          <div key={optionsPack} className={styles["part-speech"]}>
            <b className={styles.title}>{partOfSpeechCode}</b>
            <SearchOptionsPack optionsPack={options[optionsPack]} />
          </div>
        );
      })}
    </div>
  );
};

export default SearchOptions;
