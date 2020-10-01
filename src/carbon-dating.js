const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if(sampleActivity === undefined || typeof(sampleActivity)!== 'string'  
      || sampleActivity.length<1  || sampleActivity==='0' ||  !/^[0-9]+$/.test(sampleActivity)){
    return false;
  }
 const year = Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))*HALF_LIFE_PERIOD/0.693);
 return year>0 ? year : false;
  
};
