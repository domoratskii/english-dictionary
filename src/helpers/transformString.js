export default str => {
  if (str.length <= 35) return str;
  return [...str]
    .splice(0, 35)
    .concat("...")
    .join("");
};