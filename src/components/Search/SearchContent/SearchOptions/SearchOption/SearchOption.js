import React from "react";
import styles from "./SearchOption.css";
import transfromString from "../../../../../helpers/transformString";
import withHover from "../../../../../hocs/withOptionLogic";
import {compose} from "recompose";
import {connect} from "react-redux";
import {getSearchWord} from "../../../../../redux/actions/index";

const SearchOption = ({ option, handleEnter, handleClick, handlePress, handleLeave, handlePosition, isActive }) => {
  const { images: [image], definition: { text: definition }, text } = option;
  const shortString = transfromString(definition);
  return (
    <li
      className={styles.item}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      onKeyPress={(event) => handlePress(option, event)}
      onClick={() => handleClick(option)}
      tabIndex="0"
    >
      <p className={styles.text}>{shortString}</p>
      <div className={`${styles.hover} ${isActive && styles["hover-active"]}`} ref={handlePosition}>
        {image && <img src={`https:${image.url}`} alt={text} height="90"/>}
        <p className={styles.definition}>{definition}</p>
      </div>
    </li>
  );
};

export default compose(
  connect(({parentCoords}) => ({parentCoords}), {getSearchWord}),
  withHover,
)(SearchOption);