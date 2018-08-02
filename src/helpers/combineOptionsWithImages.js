export default (images, options) => {
  return options.map((option, index) => ({
    ...option,
    imageUrl: images[index]
  }));
};
