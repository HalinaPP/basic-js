const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  const repeatTimes = ('repeatTimes' in options) ? options.repeatTimes : 0;
  const separator = ('separator' in options) ? options.separator : '+';
  const addition = ('addition' in options) ? options.addition : '';
  const additionRepeatTimes = ('additionRepeatTimes' in options) ? options.additionRepeatTimes : 0 ;
  const additionSeparator = ('additionSeparator' in options) ? options.additionSeparator : '|';

  let additionStr = addition;
  for(let j=1; j<additionRepeatTimes; j++){
    additionStr += additionSeparator+addition;
  }

  let repeaterStr = str+additionStr;
  for(let i=1; i<repeatTimes; i++){
    repeaterStr += separator+str+additionStr;
  }
  return repeaterStr;
};
  