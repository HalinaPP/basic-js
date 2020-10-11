const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if(!date){
    return 'Unable to determine the time of year!'
  }
  const isPrototypeDateObj=Object.prototype.toString.call(date) === '[object Date]';
  if(!(date instanceof Date) || !Date.prototype.isPrototypeOf(date) || !isPrototypeDateObj){
    throw new Error('FAIL');
  }

  const month = date.getMonth();

  switch (month){
    case 11:
    case 1:
    case 0:
      return 'winter';
    case 2:
    case 3:
    case 4:
      return 'spring';
    case 5:
    case 6:
    case 7:
      return 'summer';
    default:
      return 'autumn';
  }
};
