import React from "react";
import styles from "./SearchOffers.css";
import { getSearchWord, getSearchOptions } from "../../../../redux/actions/index";
import { connect } from "react-redux";
import { compose } from "recompose";
import withOffersLogic from "../../../../hocs/withOffersLogic";

const SearchOffers = ({ handleClick, handlePress, offers }) => {
  return (
    <ul className={styles.list}>
      {offers.map((item, index) => {
        const { id, text, meanings } = item;
        return (
          <li
            key={id}
            className={styles.item}
            onClick={() => handleClick(meanings)}
            onKeyPress={event => handlePress(meanings, event)}
            tabIndex="0"
          >
            <div className={styles["text-wrapper"]}>
              <p className={styles.text}>{text}</p>
              <p className={styles.meanings}>
                <span>Meanings:</span>
                <span>{meanings.length}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default compose(
  connect(null, { getSearchWord, getSearchOptions }),
  withOffersLogic
)(SearchOffers);
