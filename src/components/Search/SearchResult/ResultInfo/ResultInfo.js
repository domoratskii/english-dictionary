import React, { Fragment } from "react";
import styles from "./SearchInfo.css";
import baseStyles from "../../../../styles/index.css";
import withSound from "../../../../hocs/withSound";

const ResultInfo = ({prefix, word, soundUrl, wordTranslation, transcription, partOfSpeechCode, textDefinition, speechCodes, handleClick, getSound}) => {
  return (
    <div className={styles["head-content"]}>
      <div className={styles["head-wrapper"]}>
        {<h3 className={styles.heading}>{prefix ? `${prefix} ${word}` : word}</h3>}
        {soundUrl && (
          <Fragment>
            <button type="button" className={baseStyles.sound} onClick={handleClick}>
              <span className={baseStyles["visually-hidden"]}>Listen</span>
            </button>
            <audio src={`https:${soundUrl}`} ref={getSound}/>
          </Fragment>
        )}
      </div>
      {wordTranslation && <p className={styles["word-translation"]}>{wordTranslation}</p>}
      {transcription && <p className={styles.transcription}>Transcription: {`/${transcription}/`}</p>}
      {partOfSpeechCode && <p className={styles["part-of-speech"]}>Part of speech: {speechCodes[partOfSpeechCode]}</p>}
      {textDefinition && <p className={styles.definition}>{textDefinition}</p>}
    </div>
  );
};

export default withSound(ResultInfo);
