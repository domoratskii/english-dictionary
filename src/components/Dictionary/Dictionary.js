import React, { Fragment } from "react";
import baseStyles from "./../../styles/index.css";
import styles from "./Dictionary.css";

import Search from "../Search/Search";
import SearchForm from "./../Search/SearchForm/SearchForm";
import SearchContent from "./../Search/SearchContent/SearchContent";
import SearchResult from "./../Search/SearchResult/SearchResult";

const Dictionary = () => {
  return (
    <Fragment>
      <h1 className={baseStyles["visually-hidden"]}>English dictionary</h1>
      <section className={styles.dictionary}>
        <h2 className={baseStyles["visually-hidden"]}>
          Search in the dictionary
        </h2>
        <Search>
          <SearchForm />
          <SearchContent />
          <SearchResult />
        </Search>
      </section>
    </Fragment>
  );
};

export default Dictionary;
