import React from "react";
import styles from "./SearchContent.css";
import { connect } from "react-redux";
import SearchOffers from "./SearchOffers/SearchOffers";
import SearchOptions from "./SearchOptions/SearchOptions";
import { getParentCoords } from "./../../../redux/actions/index";

const SearchContent = ({ offers, options, speechCodes, getParentCoords }) => {
  const areOffersEmpty = offers.length === 0;
  const areOptionsEmpty = Object.keys(options).length === 0;
  if (areOffersEmpty && areOptionsEmpty) return null;
  return (
    <div className={styles["search-content"]}>
      <div className={styles["search-content-wrapper"]} ref={getParentCoords}>
        {!areOptionsEmpty ? (
          <SearchOptions options={options} speechCodes={speechCodes} />
        ) : (
          <SearchOffers offers={offers} />
        )}
      </div>
    </div>
  );
};

export default connect(
  ({ offers, options, speechCodes }) => ({ offers, options, speechCodes }),
  { getParentCoords }
)(SearchContent);
