const capitalize = (str) => {
  const newCapStr = str.charAt(0).toUpperCase() + str.slice(1);
  return newCapStr;
};

module.exports = capitalize;
