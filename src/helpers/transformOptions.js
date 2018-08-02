const transformOptions = options => {
  return options.reduce((acc, item) => {
    const speechCode = item.partOfSpeechCode;
    if (!acc[speechCode]) {
      return { ...acc, [speechCode]: [item] };
    } else {
      return { ...acc, [speechCode]: [...acc[speechCode], item] };
    }
  }, {});
};

export default transformOptions;
