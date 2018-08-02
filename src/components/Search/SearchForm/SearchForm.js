import React from "react";
import styles from "./SearchForm.css";
import baseStyles from "./../../../styles/index.css";
import withFormLogic from "./../../../hocs/withFormLogic";
import { connect } from "react-redux";
import { compose } from "redux";
import { getSearchOffers } from "./../../../redux/actions/index";

const SearchForm = ({ query, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="search" className={baseStyles["visually-hidden"]}>
        Search word:
      </label>
      <input
        id="search"
        type="text"
        className={styles.query}
        value={query}
        onChange={handleChange}
        placeholder="Dictionary"
      />
      <button className={baseStyles["visually-hidden"]}>Get results</button>
    </form>
  );
};

export default compose(
  connect(null, { getSearchOffers }),
  withFormLogic
)(SearchForm);