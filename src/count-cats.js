const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  return matrix.reduce((prev,curr) => prev+curr.reduce((x,y) => y === '^^' ? x+1 : x, 0), 0);
};
