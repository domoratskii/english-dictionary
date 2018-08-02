import React from "react";
import { connect } from "react-redux";

import ResultContent from "./ResultContent/ResultContent";
import ResultInfo from "./ResultInfo/ResultInfo";

const SearchResult = ({ searchWord, speechCodes }) => {
  if (Object.keys(searchWord).length === 0) return null;

  return (
    <ResultContent imageUrl={searchWord.imageUrl} word={searchWord.word}>
      <ResultInfo
        prefix={searchWord.prefix}
        word={searchWord.text}
        soundUrl={searchWord.soundUrl}
        wordTranslation={searchWord.translation.text}
        transcription={searchWord.transcription}
        partOfSpeechCode={searchWord.partOfSpeechCode}
        textDefinition={searchWord.definition.text}
        speechCodes={speechCodes}
      />
    </ResultContent>
  );
};

export default connect(({ searchWord, speechCodes }) => ({searchWord, speechCodes}))(SearchResult);
