const stringLength = (str) => {
  const newStr = str.length;

  if (newStr < 1 || newStr > 10) {
    throw new Error("Out of range");
  }

  return newStr;
};

module.exports = stringLength;
