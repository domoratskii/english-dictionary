import React from "react";
import styles from "./ResultContent.css";

const ResultContent = ({ children, word, imageUrl }) => {
  return (
    <div className={styles["search-result"]}>
      {imageUrl && (
        <img
          className={styles["preview-img"]}
          src={`https:${imageUrl}`}
          alt={word}
        />
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ResultContent;
